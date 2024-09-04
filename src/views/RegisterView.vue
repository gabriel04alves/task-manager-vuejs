<template>
  <TemplateWithMenu>
    <div class="column is-half is-offset-one-quarter">
      <h2 class="title is-3 has-text-centered">Registro</h2>
      <form @submit.prevent="register">
        <div class="field">
          <div class="control">
            <input v-model="email" class="input" type="email" placeholder="Email" required />
          </div>
        </div>
        <div class="field">
          <div class="control">
            <input
              v-model="password"
              class="input"
              type="password"
              placeholder="Password"
              required
            />
          </div>
        </div>
        <div class="field">
          <div class="control">
            <button class="button is-primary is-fullwidth">Registrar</button>
          </div>
        </div>
      </form>

      <div class="field">
        <div class="control">
          <button @click="signInWithGoogle" class="button is-danger is-fullwidth" type="button">
            <span class="icon">
              <i class="fab fa-google"></i>
            </span>
            <span>Acessar com Google</span>
          </button>
        </div>
      </div>
    </div>
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
