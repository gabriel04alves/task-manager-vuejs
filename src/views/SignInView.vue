<template>
  <TemplateWithMenu>
    <main class="is-flex is-flex-direction-column is-align-items-center is-justify-content-center">
      <h1 class="title has-text-centered is-uppercase has-text-weight-normal mt-6">
        <p>Bem vindo ao</p>
        <RouterLink to="/about">
          <b>Task Manager</b>
        </RouterLink>
      </h1>
      <h2 class="subtitle mt-5">Fazer login:</h2>
      <form class="box" @submit.prevent="login">
        <div class="field mt-4">
          <label class="label">Email</label>
          <div class="control">
            <input
              v-model="email"
              class="input"
              type="email"
              placeholder="typescript@example.com"
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

        <div class="btns is-flex is-justify-content-space-between mt-6">
          <div class="is-flex columns is-1">
            <div class="field column">
              <div class="control">
                <button class="button is-outlined is-success">Fazer login</button>
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
                </button>
              </div>
            </div>
          </div>
          <div>
            <RouterLink to="/register" class="button btn-default is-info is-outlined"
              >Criar uma conta</RouterLink
            >
            <RouterLink to="/register" class="button btn-mobile is-info is-outlined"
              >SignUp</RouterLink
            >
          </div>
        </div>
        <p v-if="errMsg">{{ errMsg }}</p>
      </form>
    </main>
  </TemplateWithMenu>
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
import { auth } from '@/firebase/firebase'
import TemplateWithMenu from './templates/TemplateWithMenu.vue'

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

<style scoped>
main {
  height: 100%;
}
form {
  width: 40vw;
}
.btn-mobile {
  display: none;
}
@media only screen and (max-width: 768px) {
  form {
    width: 95%;
    padding: 0 8vw;
  }
  .btns {
    gap: 2vw;
  }
  .title {
    font-size: x-large;
  }
  .btn-default {
    display: none;
  }
  .btn-mobile {
    display: block;
  }
}
</style>
