<template>
  <section>
    <strong class="">{{ elapsedTime }}</strong>
  </section>
</template>

<script lang="ts" setup>
import { computed } from 'vue'

const props = defineProps({
  timeInSeconds: {
    type: Number,
    default: 0
  }
})

const elapsedTime = computed(() => {
  let createDate = new Date(props.timeInSeconds * 1000)
  let createDateFormated = createDate.toISOString().substring(11, 19)
  return createDateFormated
})
</script>
<style></style>
