<script setup lang="ts">
import ProductCard from '@/components/ProductCard.vue'
import { productCard } from '@/mock/productCard'
</script>

<template>
  <div class="container">
  <ProductCard v-for="(item, index) in productCard" :key="index" v-bind="item" />
</div>
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


</style>
