<template>
  <div class="m-field">
     <div class="m-field--header">
        <div class="title" :style="initTitleStyle">{{title}}</div>
        <div class="action"><slot name='action'></slot></div>
     </div>
     <div class="m-filed--content">
        <slot></slot>
     </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'field',
  props: {
    title: String,
    size: {
      type: String,
      default: ''
    }
  },
  setup () {
    return {}
  },
  computed: {
    initTitleStyle () {
      return {
        'font-size': this.size || ''
      }
    }
  }
})
</script>
