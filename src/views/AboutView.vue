<template>
  <TemplateWithMenu class="about">
    <section class="section">
      <div class="container">
        <h1 class="title">Sobre o Projeto</h1>

        <div class="content">
          <p>
            - O <strong>Task Manager</strong> é uma aplicação desenvolvida para ajudar na gestão de
            tarefas. Utilizando Vue.js, Firebase e TypeScript, o projeto oferece uma interface
            moderna e funcional para criar, visualizar e excluir tarefas, com persistência de dados
            garantida pelo Firebase.
          </p>
          <hr />
          <h2 class="subtitle">Tecnologias Utilizadas</h2>
          <div class="content">
            <ul>
              <li>
                <span class="is-primary"><i class="fab fa-vuejs"></i> Vue.js 3</span>
              </li>
              <li>
                <span class="is-warning"><i class="fab fa-firefox"></i> Firebase</span>
              </li>
              <li>
                <span class="is-link"><i class="fab fa-css3-alt"></i> Bulma CSS</span>
              </li>
              <li>
                <span class="is-info"><i class="fa-regular fa-file-code"></i> TypeScript</span>
              </li>
            </ul>
          </div>
          <hr />
          <h2 class="subtitle">Contatos</h2>
          <div class="buttons">
            <a
              href="https://github.com/gabriel04alves/task-manager-vuejs"
              target="_blank"
              rel="noopener noreferrer"
              class="button is-dark"
            >
              <span class="icon">
                <i class="fab fa-github"></i>
              </span>
              <span>GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com/in/gabriel04alves"
              target="_blank"
              rel="noopener noreferrer"
              class="button is-link"
            >
              <span class="icon">
                <i class="fab fa-linkedin"></i>
              </span>
              <span>LinkedIn</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  </TemplateWithMenu>
</template>

<script setup lang="ts">
import TemplateWithMenu from './templates/TemplateWithMenu.vue'
</script>

<style></style>
