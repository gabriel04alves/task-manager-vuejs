<template>
  <TemplateWithMenu>
    <Form @saveTask="addTask" />
    <div v-if="tasks.length">
      <Task
        v-for="(task, index) in tasks"
        :key="task.id ?? index"
        :task="task"
        @delete="handleDelete"
      />
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
  </TemplateWithMenu>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import Form from '@/components/FormComponent.vue'
import Task from '@/components/TaskComponent.vue'
import TemplateWithMenu from './templates/TemplateWithMenu.vue'
import {
  addTaskToFirestore,
  deleteTaskFromFirestore,
  fetchTasksForUser
} from '@/services/taskService'
import type TaskI from '@/interfaces/TaskI'

const tasks = ref<TaskI[]>([])

onMounted(async () => {
  tasks.value = await fetchTasksForUser()
})

async function addTask(newTask: TaskI) {
  const taskId = await addTaskToFirestore(newTask)
  if (taskId) {
    tasks.value.push({ ...newTask, id: taskId })
  }
}

async function handleDelete(taskId: string) {
  await deleteTaskFromFirestore(taskId)
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
