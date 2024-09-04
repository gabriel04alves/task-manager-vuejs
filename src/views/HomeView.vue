<template>
  <div class="container is-fluid">
    <section class="hero is-fullheight">
      <div class="hero-body">
        <div class="container">
          <div class="columns is-centered">
            <div class="column is-half">
              <div class="box">
                <h1 class="title has-text-centered">Bem-vindo</h1>
                <div class="buttons is-centered">
                  <router-link to="/register" class="button is-primary is-large">
                    Cadastrar
                  </router-link>
                  <router-link to="sign-in" class="button is-link is-large"> Login </router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
