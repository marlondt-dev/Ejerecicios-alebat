<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import TheTitle from '@/components/TheTitle.vue'
import TheCounter from '@/components/TheCounter.vue'
import ParentComponent from '@/components/ParentComponent.vue'
</script>

<template>
  <nav class="navbar">
    <RouterLink class="button" to="/">Home</RouterLink>
    <RouterLink class="button" to="/catalogo">Catalogo</RouterLink>
    <TheTitle>Titulo Estatico</TheTitle>
  </nav>

  <TheCounter />
  <ParentComponent />

  <RouterView />
</template>

<style scoped lang="scss">
.button {
  color: white;
  background-color: black;
  padding: 0.5em;
  margin: 0.3em;
}

.navbar {
  margin: 1.5em;
}
</style>
