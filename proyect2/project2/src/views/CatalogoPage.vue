<script setup lang="ts">
import ProductCard from '@/components/ProductCard.vue'
import { productCard } from '@/mock/productCard'
import TheTitle from '@/components/TheTitle.vue'
</script>

<template>
  <nav>
    <button>
      <RouterLink to="/">Home</RouterLink>
    </button>
    <button>
      <RouterLink to="/catalogo">Catalogo</RouterLink>
    </button>
    <TheTitle>Catalogo</TheTitle>
  </nav>
  <div class="card-container">
    <ProductCard v-for="(item, index) in productCard" :key="index" v-bind="item" />
  </div>

  <RouterView />
</template>

<style lang="scss" scoped>
.container {
  display: flex;
  justify-content: space-evenly;
}

.card {
  background-color: black;
  border: dotted 0.1em white;
  padding: 1em;
  width: 10em;
  border-radius: 5%;
  text-align: center;
}

.card-container {
  display: flex;
  justify-content: space-between;
}</style>
