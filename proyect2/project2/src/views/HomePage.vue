<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import TheTitle from '@/components/TheTitle.vue'
import TheCounter from '@/components/TheCounter.vue'
</script>

<template>
  <body>
    <TheTitle>Titulo Estatico</TheTitle>
    <TheCounter />

    <nav>
      <button><RouterLink to="/home">Home</RouterLink></button>
      <button><RouterLink to="/catalogo">Catalogo</RouterLink></button>
      <RouterView />
    </nav>
  </body>
</template>

<style scoped lang="scss"></style>
