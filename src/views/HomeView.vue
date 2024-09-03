<template>
  <main>
    <Form @saveTask="addTask" />
    <div>
      <Task v-for="(task, index) in tasks" :key="index" :task="task" />
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
</script>
