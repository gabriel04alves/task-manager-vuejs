<template>
  <div class="main">
    <div class="columns is-flex is-align-items-center">
      <div class="column is-8" role="form" aria-label="Formulário para criação de uma nova tarefa">
        <input
          type="text"
          class="input is-size-5"
          placeholder="O que você vai fazer agora?"
          v-model="description"
        />
      </div>
      <div class="column"><Stopwatch @finishedTimer="finishTask" /></div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Stopwatch from './StopwatchComponent.vue'
import type TaskI from '@/interfaces/TaskI'

export default defineComponent({
  name: 'FormComponent',
  emits: ['saveTask'],
  components: {
    Stopwatch
  },
  data() {
    return {
      description: '',
      tasks: [] as TaskI[]
    }
  },
  methods: {
    async finishTask(elapsedTime: number) {
      const defaultDescription = 'Tarefa sem descrição...'

      const taskDescription = this.description.trim() || defaultDescription

      const newTask: TaskI = {
        id: '',
        timeInSeconds: elapsedTime,
        description: taskDescription
      }
      this.$emit('saveTask', newTask)
      this.description = ''
    }
  }
})
</script>

<style scoped>
.main {
  padding: 2rem;
}
@media only screen and (max-width: 768px) {
  .columns {
    flex-direction: column;
  }
}
</style>
