<template>
  <div class="m-filter-item">
    <a-form ref="formRef" layout="inline" :model="formState">
      <a-form-item v-for="(item, index) in formConfig" :key="`filter-${index}`" :name="item.bindKey">
        <template v-slot:label>
          <span v-html="item.label"></span>
        </template>
        <a-input v-if="item.type === 'input'" v-model:value="formState[item.bindKey]" allowClear />

        <a-select
          v-if="item.type === 'select'"
          v-model:value="formState[item.bindKey]"
          allowClear
          :mode="item.mode"
          :option-label-prop="item.optionLabelProp || 'label'"
          :show-arrow="defaultTrue(item.showArrow)"
          :showSearch="item.showSearch || null"
          @change="onSelectChange(item.change, $event)"
          class="w-180"
        >
          <a-select-option
            v-for="(opt, idx) in initSelectOptions(item.defaultOptions || item.options)"
            :key="`option-select-${item.bindKey}-${idx}`"
            :value="opt[selectInitField(item, 'value')]"
            :label="opt[selectInitField(item, 'name')]"
          >
            {{ opt[selectInitField(item, 'name')] }}
          </a-select-option>
        </a-select>

        <a-cascader
          v-if="item.type === 'cascader'"
          v-model:value="formState[item.bindKey]"
          allowClear
          placeholder=""
          :change-on-select="defaultTrue(item.changeOnSelect)"
          :field-names="item.fieldNames"
          :options="item.options"
        />
      </a-form-item>

      <a-form-item class="condition-query-buttons">
        <a-space size="middle">
          <a-button v-for="(item, index) in btnConfig" :style="item.style || {}" :key="`button-${index}`" :type="item.type" v-show="defaultTrue(item.show)" @click="btnClick(item.clickType)">
            {{ item.name }}
          </a-button>
        </a-space>
      </a-form-item>
    </a-form>
  </div>
</template>

<script lang="ts">
  import { defineComponent, reactive, ref, toRaw, UnwrapRef, watch } from 'vue'

  export default defineComponent({
    name: 'filter-item',
    props: {
      formData: {
        type: Object,
        default () {
          return {}
        }
      },
      formConfig: {
        type: Array,
        default () {
          return []
        }
      },
      btnConfig: {
        type: Array,
        default () {
          return []
        }
      }
    },
    setup (props: any, ctx: any) {
      const $emit = ctx.emit
      const formRef = ref()
      const formState: UnwrapRef<any> = reactive(JSON.parse(JSON.stringify(props.formData)))

      const btnConfigList: any[] = toRaw(props.btnConfig)
      const formConfigList: any[] = toRaw(props.formConfig)
      let result: any
      const resultView = ref(result)

      /** @name watch */
      watch(
        () => props.formData,
        () => {
          console.log()
        },
        { deep: true }
      )

      /** @name computed */

      /** @name methods */
      /** @description 初始化select选项数据结构 */
    const initSelectOptions = function (options: Array<any>) {
      if (!options || !options.length) {
        return options
      }
      if (typeof options[0] === 'string') {
        return options.map(item => {
          return {
            name: item,
            value: item
          }
        })
      }
      return options
    }
    /** @description 重定义select fieldNames */
    const selectInitField = function (item: any, type: string) {
      if (item.fieldNames) {
        return item.fieldNames[type]
      }
      return type
    }
    /** @description 定义select事件监听 */
    const onSelectChange = function (changeCallback: any, value: any) {
      if (!changeCallback) {
        return
      }
      if (typeof changeCallback !== 'function') {
        throw new TypeError('params:change must be a function')
      }
      const resetKey = changeCallback(value)
      if (this.copyData[resetKey]) {
        this.copyData[resetKey] = ''
      }
    }
      // 查询时注入处理结果的函数并获取相应的结果
      const injectCustomValueRule = (type: string, key: string, value: any) => {
        let ret:any
        formConfigList.forEach((item: any) => {
          // console.log(item.bindKey, 'key', key)
          if (item.bindKey === key && item.customRender) {
            ret = item.customRender(value)
          }
          // reset操作，清空defaultOptions的选项
          if (type === 'reset' && item.defaultOptions) {
            item.defaultOptions = []
          }
        })
        return ret
      }
      const interceptResult = () => {
        const ret = JSON.parse(JSON.stringify(formState))
        return ret
      }
      const defaultTrue = (bool: any): boolean => {
        return bool !== false
      }
      const reset = () => {
        formRef.value.resetFields()
      }
      const btnClick = (type: string, watch = false): void => {
        const params: any = {}
        if (type === 'reset') {
          reset()
        }
        formConfigList.forEach((item: any) => {
          result = interceptResult()
          resultView.value = result
          const key = item.bindKey
          const value = result[key] === undefined ? '' : result[key]
          // 判断是否注入了自定义函数
          const customValue: any = injectCustomValueRule(type, key, value)
          if (typeof customValue === 'function') {
            customValue({ key, value, params })
          } else if (customValue === null) {
            // 返回值为null 此字段不会添加到返回结果中
          } else if (customValue !== undefined) {
            params[key] = customValue
          } else {
            params[key] = value
          }
        })

        if (watch) {
          $emit('change', { type, params })
        } else {
          $emit('btnClick', { type, params })
        }
      }

      return {
        formConfigList,
        btnConfigList,
        formState,
        formRef,
        result,
        resultView,
        copyWatching: true,
        btnClick,
        defaultTrue,
        // select
        initSelectOptions,
        selectInitField,
        onSelectChange,
        // export
        reset
      }
    }
  })
</script>
