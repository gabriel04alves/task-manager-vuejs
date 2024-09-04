<template>
  <body class="columns is-gapless is-multiline">
    <div class="column is-one-quarter">
      <MenuComponent />
    </div>
    <div class="column is-three-querter">
      <slot></slot>
    </div>
  </body>
</template>

<script setup lang="ts">
import MenuComponent from '../../components/MenuComponent.vue'
</script>
