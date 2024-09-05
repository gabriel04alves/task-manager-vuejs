<template>
  <div class="box has-text-weight-light">
    <div class="columns is-flex is-align-items-center">
      <p class="column is-7 has-text-left description">• {{ task.description }}</p>
      <div class="column"><Timer :timeInSeconds="task.timeInSeconds" /></div>
      <button class="button has-text-danger is-ghost is-outlined" @click="deleteTask">
        <span class="icon is-small">
          <i class="fas fa-trash"></i>
        </span>
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Timer from './TimerComponent.vue'
import type { PropType } from 'vue'
import type TaskI from '../interfaces/TaskI'

export default defineComponent({
  name: 'TaskComponent',
  components: {
    Timer
  },
  props: {
    task: {
      type: Object as PropType<TaskI>,
      required: true
    }
  },
  emits: ['delete'],
  methods: {
    deleteTask() {
      this.$emit('delete', this.task.id)
    }
  }
})
</script>

<style scoped>
.box {
  margin: 1.8vh 2vh;
}
button {
  margin: 0 3vw;
}
.description {
  word-wrap: break-word;
  overflow-wrap: break-word;
}
@media only screen and (max-width: 768px) {
  .columns {
    display: flex;
    flex-direction: row;
  }
}
</style>
