<template>
  <div class="main">
    <div class="columns is-flex is-align-items-center">
      <div class="column is-8" role="form" aria-label="Formulário para criação de uma nova tarefa">
        <input type="text" class="input" placeholder="O que você fazer agora?" />
      </div>
      <div class="column"><Stopwatch /></div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import Stopwatch from './StopwatchComponent.vue'
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
