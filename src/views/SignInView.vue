<template>
  <div class="container">
    <div class="column is-half is-offset-one-quarter">
      <h2 class="title is-3 has-text-centered">Login</h2>
      <form @submit.prevent="login">
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
            <button class="button is-primary is-fullwidth">Entrar</button>
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
      <p v-if="errMsg">{{ errMsg }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import {
  getAuth,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider
} from 'firebase/auth'
import { useRouter } from 'vue-router'
import { auth } from '@/firebase'

const email = ref('')
const password = ref('')
const router = useRouter()
const errMsg = ref('')

const login = () => {
  signInWithEmailAndPassword(auth, email.value, password.value)
    .then((data) => {
      console.log('sucesso no login')
      console.log(auth.currentUser)
      router.push('/app')
    })
    .catch((error) => {
      switch (error.code) {
        case 'auth/invalid-email':
          errMsg.value = 'Invalid email'
          break
        case 'auth/user-not-found':
          errMsg.value = 'No account with that email was found'
          break
        case 'auth/wrong-password':
          errMsg.value = 'Incorrect password'
          break
        default:
          errMsg.value = 'Email or password was incorrect'
          break
      }
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
