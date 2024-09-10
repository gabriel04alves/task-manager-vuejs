<template>
  <TemplateWithMenu>
    <Form @saveTask="addTask" data-aos="zoom-in" />
    <div v-if="tasks.length">
      <div v-for="(group, date) in groupedTasks" :key="date">
        <h2 class="has-text-weight-normal ml-5">{{ formatDate(date) }}:</h2>
        <Task
          v-for="task in group"
          :key="task.id"
          :task="task"
          @delete="handleDelete(task.id!)"
          data-aos="fade-down"
        />

        <hr class="m-6" />
      </div>
    </div>
    <div v-else class="is-flex is-flex-direction-column is-align-items-center mt-6">
      <p class="is-size-5 has-text-centered">Nenhuma tarefa feita por enquanto...</p>
    </div>
  </TemplateWithMenu>
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'
import Form from '@/components/FormComponent.vue'
import Task from '@/components/TaskComponent.vue'
import TemplateWithMenu from './templates/TemplateWithMenu.vue'
import {
  addTaskToFirestore,
  deleteTaskFromFirestore,
  fetchTasksForUser
} from '@/services/taskService'
import type TaskI from '@/interfaces/TaskI'
import { formatDate } from '@/utils/dateFormatter'

const tasks = ref<TaskI[]>([])

onMounted(async () => {
  tasks.value = await fetchTasksForUser()
})

const groupedTasks = computed(() => {
  const groups = tasks.value.reduce(
    (groups, task) => {
      if (task.createdAt) {
        const date = new Date(task.createdAt).toISOString().split('T')[0]
        if (!groups[date]) {
          groups[date] = []
        }
        groups[date].push(task)
      }
      return groups
    },
    {} as Record<string, TaskI[]>
  )

  const sortedGroups = Object.keys(groups)
    .sort((a, b) => new Date(b).getTime() - new Date(a).getTime())
    .reduce(
      (sorted, date) => {
        sorted[date] = groups[date]
        return sorted
      },
      {} as Record<string, TaskI[]>
    )

  return sortedGroups
})

async function addTask(newTask: TaskI) {
  const taskId = await addTaskToFirestore(newTask)
  if (taskId) {
    tasks.value.push({ ...newTask, id: taskId, createdAt: new Date() })
  }
}

async function handleDelete(taskId: string) {
  await deleteTaskFromFirestore(taskId)
  tasks.value = tasks.value.filter((task) => task.id !== taskId)
}
</script>
