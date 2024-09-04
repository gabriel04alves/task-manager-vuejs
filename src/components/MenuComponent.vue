<template>
  <header
    class="is-flex is-flex-direction-column is-align-items-center is-justify-content-space-between"
  >
    <div class="mt-6">
      <img
        class="is-rounded"
        src="https://raw.githubusercontent.com/gabriel04alves/task-manager-vuejs3/main/src/assets/images/logo.webp?token=GHSAT0AAAAAACWQNOMZGX356MBIDDUFORMUZWY44SQ"
        alt=""
      />
    </div>
    <div class="btns is-flex is-justify-content-space-between is-uppercase">
      <button
        v-if="conditionElement"
        class="btn button is-ghost has-text-primary-light"
        @click="goBack"
      >
        <span class="icon">
          <i class="fa-solid fa-caret-left"></i>
        </span>
        <span> Voltar </span>
      </button>
      <RouterLink class="btn button is-ghost has-text-primary-light" to="/about">
        <span class="icon">
          <i class="fa-solid fa-circle-info"></i>
        </span>
        <span> Sobre </span>
      </RouterLink>
      <button
        v-if="isLoggedIn"
        @click="handleSignOut"
        class="btn button is-ghost has-text-primary-light"
      >
        <span class="icon">
          <i class="fa-solid fa-arrow-right-from-bracket"></i>
        </span>
        <span> Sair </span>
      </button>
    </div>
  </header>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { getAuth, onAuthStateChanged, signOut, type Auth } from 'firebase/auth'
import router from '@/router'
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const isLoggedIn = ref(false)

const conditionElement = computed(() => {
  return route.path === '/about'
})

let auth: Auth
onMounted(() => {
  auth = getAuth()
  onAuthStateChanged(auth, (user) => {
    if (user) {
      isLoggedIn.value = true
    } else {
      isLoggedIn.value = false
    }
  })
})

const handleSignOut = () => {
  signOut(auth).then(() => {
    router.push('/')
  })
}

const goBack = () => {
  router.go(-1)
}
</script>

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
