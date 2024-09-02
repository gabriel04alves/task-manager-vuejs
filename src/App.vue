<script setup lang="ts">
import { RouterView } from 'vue-router'
import MenuComponent from './components/MenuComponent.vue'
</script>

<template>
  <main class="columns is-gapless is-multiline">
    <div class="column is-one-quarter">
      <MenuComponent />
    </div>
    <div class="column is-three-querter">
      <RouterView />
    </div>
  </main>
</template>

<style scoped></style>
