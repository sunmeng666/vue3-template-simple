<template>
  <div class="right-item">
    <a-badge dot>
      <BellOutlined class="right-item--icon" />
    </a-badge>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'
  import { BellOutlined } from '@ant-design/icons-vue'

  export default defineComponent({
    components: { BellOutlined },
    name: 'AsNotice',
    setup () {
      return {}
    }
  })
</script>
