<template>
  <div class="box has-text-weight-light">
    <div class="columns">
      <div class="column is-7">• Tarefa XYZ</div>
      <div class="column"><Timer /></div>
      <button class="button has-text-danger is-ghost is-outlined">
        <span class="icon is-small">
          <i class="fas fa-trash"></i>
        </span>
      </button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import Timer from './TimerComponent.vue'
</script>

<style scoped>
.box {
  margin: 1.8vh 2vh;
}
button {
  margin: 0 3vw;
}
@media only screen and (max-width: 768px) {
  .columns {
    display: flex;
    flex-direction: row;
  }
}
</style>
