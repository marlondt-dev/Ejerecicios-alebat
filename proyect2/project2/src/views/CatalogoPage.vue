<script setup lang="ts">
import ProductCard from '@/components/ProductCard.vue'
import { productCards } from '@/mock/productCards'
import TheTitle from '@/components/TheTitle.vue'
import TheCounter from '@/components/TheCounter.vue'
</script>

<template>
  <nav class="navbar">
    <RouterLink class="button" to="/">Home</RouterLink>
    <RouterLink class="button" to="/catalogo">Catalogo</RouterLink>
    <TheTitle>Titulo Estatico</TheTitle>
  </nav>
  <div class="card-container">
    <ProductCard v-for="(item, index) in productCards" :key="index" v-bind="item" />
  </div>

  <TheCounter />

  <RouterView />
</template>

<style lang="scss" scoped>
.card-container {
  display: flex;
  justify-content: space-evenly;
}

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
