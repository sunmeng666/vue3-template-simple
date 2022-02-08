<template>
  <a-sub-menu :key="item.fullPath">
    <template #title>
      <m-icon v-if="item.meta.icon" :type="item.meta.icon"></m-icon>
      <span>{{ item.meta.title }}</span>
    </template>
    <slot></slot>
  </a-sub-menu>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'

  export default defineComponent({
    name: 'm-sub-menu',
    props: {
      item: {
        type: Object,
        default () {
          return null
        }
      },
      routeChildren: {
        type: Object,
        default () {
          return null
        }
      }
    },
    setup () {
      return {}
    }
  })
</script>

<style scoped>
  .sub-menu {
    color: #fff;
  }
</style>
