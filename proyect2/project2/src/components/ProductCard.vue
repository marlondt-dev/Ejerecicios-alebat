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
  <div class="container">
    <div class="card">
      <img src="/productocaja.jpg" alt="producto caja" />
      <p>{{ id }}</p>
      <h3>{{ cardTitle }}</h3>
      <p>{{ description }}</p>
      <p>{{ prices }}</p>
      <button>{{ buttonText }}</button>
    </div>
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

.container {
  display: flex;
}
</style>
