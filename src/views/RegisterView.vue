<template>
  <TemplateWithMenu>
    <main class="is-flex is-flex-direction-column is-align-items-center is-justify-content-center">
      <h1 class="is-size-4 has-text-centered is-uppercase has-text-weight-normal mt-6">
        <p>Registro</p>
      </h1>
      <h2 class="subtitle is-size-5 mt-2">Crie sua conta:</h2>
      <form class="box" @submit.prevent="register">
        <div class="field mt-4">
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

        <div class="btns is-flex is-justify-content-space-between mt-6">
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
                </button>
              </div>
            </div>
          </div>
          <div>
            <RouterLink to="/" class="button btn-default is-info is-outlined">
              Já tenho uma conta
            </RouterLink>
            <RouterLink to="/" class="button btn-mobile is-info is-outlined"> Login </RouterLink>
          </div>
        </div>
      </form>
    </main>
  </TemplateWithMenu>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from 'firebase/auth'
import { useRouter } from 'vue-router'
import { auth } from '@/firebase/firebase'
import TemplateWithMenu from './templates/TemplateWithMenu.vue'

const email = ref('')
const password = ref('')
const router = useRouter()

const register = () => {
  createUserWithEmailAndPassword(auth, email.value, password.value)
    .then(() => {
      router.push('/app')
    })
    .catch((error) => {
      alert(error.message)
    })
}

const signInWithGoogle = () => {
  const provider = new GoogleAuthProvider()
  signInWithPopup(auth, provider)
    .then(() => {
      router.push('/app')
    })
    .catch((error) => {
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
    width: auto;
    padding: 0 8vw;
  }
  .btns {
    gap: 2vw;
  }
  .btn-default {
    display: none;
  }
  .btn-mobile {
    display: block;
  }
}
</style>
