<template>
  <a-config-provider :locale="locale">
    <router-view />
  </a-config-provider>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'
  import { useStore } from './store'

  export default defineComponent({
    name: 'App',
    components: {},
    data () {
      const { appStore } = useStore()
      const locale = appStore.getAntdLocale
      return {
        locale
      }
    }
  })
</script>
