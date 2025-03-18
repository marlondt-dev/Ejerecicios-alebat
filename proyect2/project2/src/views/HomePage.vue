<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import TheTitle from '@/components/TheTitle.vue'
import TheCounter from '@/components/TheCounter.vue'
import ParentComponent from '@/components/ParentComponent.vue'
</script>

<template>
  <nav>
    <button><RouterLink to="/">Home</RouterLink></button>
    <button><RouterLink to="/catalogo">Catalogo</RouterLink></button>
  </nav>

  <TheTitle>Titulo Estatico</TheTitle>
  <TheCounter />
  <ParentComponent />

  <RouterView />
</template>

<style scoped lang="scss"></style>
