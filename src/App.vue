<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import MenuComponent from './components/MenuComponent.vue'
</script>

<template>
  <main class="columns is-gapless is-multiline">
    <div class="column is-one-quarter">
      <MenuComponent />
    </div>

    <RouterView />
  </main>
</template>

<style scoped></style>
