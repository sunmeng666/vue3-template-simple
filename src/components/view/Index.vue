<template>
  <router-view v-slot="{ Component }" class="m-view">
    <transition name="fade-slide">
      <component :is="Component" :root="rootInfo"></component>
    </transition>
  </router-view>
</template>

<script lang="ts">
  import { defineComponent, ref, watch } from 'vue'

  export default defineComponent({
    props: ['root'],
    name: 'pageview',
    setup (props) {
      const rootInfo: any = ref(props.root)
      watch(
        () => props.root,
        (newVal) => {
          rootInfo.value = newVal
        },
        {
          deep: true
        }
      )
      return {
        rootInfo
      }
    }
  })
</script>

<style lang="less" scoped>
  .m-view {
    z-index: 999;
    background: #f7f8f9;
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
  }
</style>
