<template>
  <div
    class="is-flex is-flex-direction-column is-align-items-center is-justify-content-space-between"
  >
    <Timer />
    <div class="box-btns is-flex mt-3">
      <button class="button">
        <span class="icon">
          <i class="fas fa-play"></i>
        </span>
        <span>Começar</span>
      </button>
      <button class="button">
        <span class="icon">
          <i class="fas fa-pause"></i>
        </span>
        <span>Pausar</span>
      </button>
      <button class="button">
        <span class="icon">
          <i class="fas fa-stop"></i>
        </span>
        <span>Acabar</span>
      </button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import Timer from './TimerComponent.vue'
</script>
<style>
.box-btns {
  gap: 1vw;
}
</style>
