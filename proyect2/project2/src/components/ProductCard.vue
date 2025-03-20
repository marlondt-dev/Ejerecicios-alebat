<script setup lang="ts">
// type Props = {
//   description: string
//   cardTitle: string
//   prices: number[]
// }

import type { ProductCard } from '@/types/card'
defineProps<ProductCard>()
</script>

<template>
  <div class="card">
    <img src="/productocaja.jpg" alt="producto caja" />
    <h3>{{ cardTitle }}</h3>
    <p>{{ description }}</p>
    <p>{{ prices }}</p>
    <button>{{ buttonText }}</button>
  </div>
</template>

<style scoped lang="scss">
.card {
  background-color: black;
  border: solid 0.1em white;
  padding: 1em;
  width: 10em;
  border-radius: 3%;
  text-align: center;
}

button {
  background-color: rgb(30, 30, 129);
}
</style>
