<template>
  <div
    class="is-flex is-flex-direction-column is-align-items-center is-justify-content-space-between"
  >
    <TimerComponent class="is-size-3" :timeInSeconds="timeInSeconds" />
    <div class="box-btns is-flex mt-3">
      <button
        class="button is-success is-outlined"
        @click="start"
        :disabled="timerStatus == 'started'"
      >
        <span class="icon">
          <i class="fas fa-play"></i>
        </span>
        <span>Começar</span>
      </button>
      <button
        class="button"
        @click="pause"
        :disabled="timerStatus == 'stopped' || timerStatus == 'paused'"
      >
        <span class="icon">
          <i class="fas fa-pause"></i>
        </span>
        <span>Pausar</span>
      </button>
      <button
        class="button is-danger is-outlined"
        @click="finish"
        :disabled="timerStatus == 'stopped'"
      >
        <span class="icon">
          <i class="fa-regular fa-paper-plane"></i>
        </span>
        <span>Feito!</span>
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import TimerComponent from './TimerComponent.vue'

export default defineComponent({
  name: 'StopwatchComponent',
  emits: ['finishedTimer'],
  components: {
    TimerComponent
  },
  data() {
    return {
      timeInSeconds: 0,
      timer: 0,
      timerStatus: 'stopped'
    }
  },
  methods: {
    start() {
      this.timerStatus = 'started'
      this.timer = setInterval(() => {
        this.timeInSeconds += 1
      }, 1000)
    },
    pause() {
      this.timerStatus = 'paused'
      clearInterval(this.timer)
    },
    finish() {
      this.timerStatus = 'stopped'
      clearInterval(this.timer)
      this.$emit('finishedTimer', this.timeInSeconds && console.log('tarefa finalizada'))
      this.timeInSeconds = 0
    }
  }
})
</script>
<style>
.box-btns {
  gap: 1vw;
}
</style>
