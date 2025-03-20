<script setup lang="ts">
import ProductCard from '@/components/ProductCard.vue'
import { productCard } from '@/mock/productCard'
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
    <ProductCard v-for="(item, index) in productCard" :key="index" v-bind="item" />
  </div>

  <TheCounter />

  <RouterView />
</template>

<style lang="scss" scoped>
.container {
  display: flex;
  justify-content: space-evenly;
}

.card {
  background-color: black;
  border: solid 0.1em white;
  padding: 1em;
  width: 10em;
  border-radius: 5%;
  text-align: center;
}

.card-container {
  display: flex;
  justify-content: space-between;
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
