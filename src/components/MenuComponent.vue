<script setup lang="ts"></script>

<template>
  <header
    class="is-flex is-flex-direction-column is-align-items-center is-justify-content-space-between"
  >
    <div class="mt-6">
      <img class="is-rounded" src="../assets/images/logo.webp" alt="" />
    </div>
    <div class="btns is-flex is-justify-content-space-between is-uppercase">
      <RouterLink class="btn button is-ghost has-text-primary-light" to="/">
        <span class="icon">
          <i class="fa-solid fa-list"></i>
        </span>
        <span> Task Manager </span>
      </RouterLink>
      <RouterLink class="btn button is-ghost has-text-primary-light" to="/about">
        <span class="icon">
          <i class="fa-solid fa-circle-info"></i>
        </span>
        <span> Sobre </span>
      </RouterLink>
    </div>
  </header>
</template>

<style scoped>
header {
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
.button:hover {
  text-decoration: none;
  font-weight: 600;
}

@media only screen and (max-width: 768px) {
  header {
    height: auto;
    margin-bottom: 1vh;
    padding: 1vh;
  }
  img {
    display: none;
  }
  i {
    display: none;
  }
}
</style>
