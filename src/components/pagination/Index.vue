<template>
  <div class="m-pagination" :class="alignClass">
    <a-pagination
      show-quick-jumper
      show-size-changer
      :show-total="total => `共${total}条`"
      v-model:current="current"
      :total="total"
      :pageSize="size"
      :pageSizeOptions="['10', '20', '30', '40', '50']"
      show-less-items
      @change="pageChange"
      @showSizeChange="sizeChange"
    />
  </div>
</template>

<script lang="ts">
  import { computed, defineComponent, reactive, ref, watch } from 'vue'

  export default defineComponent({
    name: 'pagination',
    emits: ['pageChange', 'sizeChange', 'change', 'update:modelValue'],
    props: {
      modelValue: {
        type: Object,
        default () {
          return {
            page: 1,
            size: 10,
            total: 10
          }
        }
      },
      align: {
        type: String,
        default: 'center' // left | right
      }
    },
    setup (props: any, ctx: any) {
      const { emit } = ctx
      const modelValue = reactive(props.modelValue)
      const current = ref(modelValue.page)
      const total = ref(modelValue.total)
      const size = ref(modelValue.size)

      const pageChange = (page) => {
        modelValue.page = page
        emit('update:modelValue', modelValue)
        emit('change', page)
      }

      const sizeChange = (currentSize: number, size: number) => {
        modelValue.size = size
        modelValue.page = 1
        emit('update:modelValue', modelValue)
        emit('change', size)
      }

      watch(
        () => modelValue.total,
        (newVal) => {
          total.value = newVal
        }
      )
      watch(
        () => modelValue.size,
        (newVal) => {
          size.value = newVal
        }
      )

      const alignClass = computed(() => {
        return {
          ['align-' + props.align]: true
        }
      })
      return {
        size,
        total,
        current,
        pageChange,
        sizeChange,
        alignClass
      }
    }
  })
</script>
