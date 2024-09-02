<script setup lang="ts"></script>

<template>
  <header class="container is-flex is-flex-direction-column is-align-items-center">
    <div class="btns is-flex is-justify-content-space-between is-uppercase">
      <RouterLink class="btn button is-text" to="/">
        <span class="icon">
          <i class="fa-solid fa-list"></i>
        </span>
        <span> Task Manager </span>
      </RouterLink>
      <RouterLink class="btn button is-text" to="/about">
        <span class="icon">
          <i class="fa-solid fa-circle-info"></i>
        </span>
        <span> Sobre </span>
      </RouterLink>
    </div>
    <div class="mt-6"><img src="../assets/images/pencil-square.svg" alt="" /></div>
  </header>
</template>

<style scoped>
.container {
  background: #0d3b66;
  padding: 2rem;
  width: 100%;
  height: 100vh;
}
img {
  width: 20vh;
}

.btns {
  gap: 3vh;
}

.btn {
  display: flex;
  align-items: center;
  text-decoration: none;
}
</style>
