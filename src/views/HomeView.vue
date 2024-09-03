<template>
  <main>
    <Form @saveTask="addTask" />
    <div v-if="tasks.length">
      <Task v-for="task in tasks" :key="task.id" :task="task" @delete="handleDelete" />
    </div>
    <div v-else class="is-flex is-flex-direction-column is-align-items-center mt-6">
      <p class="is-size-5 has-text-centered">Nenhuma tarefa feita por enquanto...</p>
      <iframe
        src="https://giphy.com/embed/2YoREgUddKzMuBuaVd"
        width="240"
        height="240"
        style=""
        frameBorder="0"
        class="giphy-embed mt-6"
        allowFullScreen
      ></iframe>
      <p>
        <a href="https://giphy.com/gifs/evite-basketball-college-hoops-2YoREgUddKzMuBuaVd"
          >via GIPHY</a
        >
      </p>
    </div>
  </main>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Form from '@/components/FormComponent.vue'
import Task from '@/components/TaskComponent.vue'
import type TaskI from '@/interfaces/TaskI'

const tasks = ref<TaskI[]>([])

function addTask(newTask: TaskI) {
  tasks.value.push(newTask)
}

function handleDelete(taskId: number) {
  tasks.value = tasks.value.filter((task) => task.id !== taskId)
}
</script>

<style>
iframe,
a {
  display: none;
}
@media only screen and (max-width: 768px) {
  iframe {
    display: flex;
  }
}
</style>
