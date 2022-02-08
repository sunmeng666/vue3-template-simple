<template>
  <icon-font class="m-icon" :type="typeName" :style="initStyle" />
</template>

<script lang="ts">
  import { defineComponent } from 'vue'

  export default defineComponent({
    name: 'icon',
    props: {
      type: {
        type: String,
        required: true
      },
      size: {
        type: [String, Number],
        default: ''
      },
      right: {
        type: [Number, String],
        default: 0
      },
      left: {
        type: [Number, String],
        default: 0
      }
    },
    data () {
      return {
        sizeConfig: {
          default: 16,
          small: 14,
          mini: 12
        }
      }
    },
    computed: {
      typeName (): string {
        return `icon-metafacture-${this.type}`
      },
      initStyle (): any {
        const size: any = this.size
        // enum SizeConfig {
        //   'default' = 1.2,
        //   'small' = 1.1,
        //   'mini' = 1,
        // }
        return {
          marginLeft: this.left + 'px',
          marginRight: this.right + 'px',
          // fontSize: (SizeConfig[size] || size) + 'em'
          fontSize: size || '1em'
        }
      }
    }
  })
</script>
