<template>
  <div
    class="is-flex is-flex-direction-column is-align-items-center is-justify-content-space-between"
  >
    <TimerComponent class="is-size-3" :timeInSeconds="timeInSeconds" />
    <div class="box-btns is-flex mt-3">
      <ButtonComponent
        buttonText="Começar"
        iconClass="fas fa-play"
        buttonClass="is-success"
        :isOutlined="true"
        :isDisabled="timerStatus === 'started'"
        :onClick="start"
      />
      <ButtonComponent
        buttonText="Pausar"
        iconClass="fas fa-pause"
        :isDisabled="timerStatus === 'stopped' || timerStatus === 'paused'"
        :onClick="pause"
      />
      <ButtonComponent
        buttonText="Feito!"
        iconClass="fa-regular fa-paper-plane"
        buttonClass="is-danger"
        :isOutlined="true"
        :isDisabled="timerStatus === 'stopped'"
        :onClick="finish"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import TimerComponent from './TimerComponent.vue'
import ButtonComponent from './ButtonComponent.vue'

export default defineComponent({
  name: 'StopwatchComponent',
  emits: ['finishedTimer'],
  components: {
    TimerComponent,
    ButtonComponent
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
      this.$emit('finishedTimer', this.timeInSeconds)
      clearInterval(this.timer)
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
