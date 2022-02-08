<template>
  <div class="m-page-footer">
    <slot></slot>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'

  export default defineComponent({
    name: 'page-footer',
    setup() {
      return {}
    }
  })
</script>
<style lang="less" scoped>
</style>
