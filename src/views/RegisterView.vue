<template>
  <TemplateWithMenu>
    <main class="is-flex is-flex-direction-column is-align-items-center is-justify-content-center">
      <h1 class="title has-text-centered is-uppercase has-text-weight-normal">Registro</h1>
      <h2 class="subtitle mt-5">Crie sua conta:</h2>
      <form class="box" @submit.prevent="register">
        <div class="field">
          <label class="label">Email</label>
          <div class="control">
            <input
              v-model="email"
              class="input"
              type="email"
              placeholder="email@example.com"
              required
            />
          </div>
        </div>

        <div class="field">
          <label class="label">Senha</label>
          <div class="control">
            <input
              v-model="password"
              class="input"
              type="password"
              placeholder="********"
              required
            />
          </div>
        </div>

        <div class="is-flex is-justify-content-space-between mt-6">
          <div class="is-flex columns is-1">
            <div class="field column">
              <div class="control">
                <button class="button is-outlined is-success">Registrar</button>
              </div>
            </div>
            <div class="field column">
              <div class="control">
                <button
                  @click="signInWithGoogle"
                  class="button is-outlined is-danger"
                  type="button"
                >
                  <span class="icon">
                    <i class="fab fa-google"></i>
                  </span>
                  <span>Use o Google</span>
                </button>
              </div>
            </div>
          </div>
          <div>
            <RouterLink to="/" class="button is-info is-outlined">Já tenho uma conta</RouterLink>
          </div>
        </div>
      </form>
    </main>
  </TemplateWithMenu>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider
} from 'firebase/auth'
import { useRouter } from 'vue-router'
import { auth } from '@/firebase'
import TemplateWithMenu from './templates/TemplateWithMenu.vue'

const email = ref('')
const password = ref('')
const router = useRouter()

const register = () => {
  createUserWithEmailAndPassword(auth, email.value, password.value)
    .then((data) => {
      console.log('sucesso no registro')
      console.log(auth.currentUser)
      router.push('/app')
    })
    .catch((error) => {
      alert(error.message)
    })
}

const signInWithGoogle = () => {
  const provider = new GoogleAuthProvider()
  signInWithPopup(auth, provider)
    .then((result) => {
      console.log('sucesso no login com Google')
      router.push('/app')
    })
    .catch((error) => {
      console.error(error)
      alert(error.message)
    })
}
</script>

<style scoped>
main {
  height: 100%;
}
form {
  width: 40vw;
}
</style>
