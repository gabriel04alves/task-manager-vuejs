<template>
  <button
    :class="['button', buttonClass, { 'is-outlined': isOutlined }]"
    @click="handleClick"
    :disabled="isDisabled"
  >
    <span class="icon"><i :class="iconClass"></i></span>
    <span>{{ buttonText }}</span>
  </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ButtonComponent',
  props: {
    buttonText: {
      type: String,
      required: true
    },
    iconClass: {
      type: String,
      required: true
    },
    buttonClass: {
      type: String,
      default: 'button'
    },
    isOutlined: {
      type: Boolean,
      default: false
    },
    isDisabled: {
      type: Boolean,
      default: false
    },
    onClick: {
      type: Function,
      required: true
    }
  },
  methods: {
    handleClick() {
      this.onClick()
    }
  }
})
</script>

<style scoped></style>
