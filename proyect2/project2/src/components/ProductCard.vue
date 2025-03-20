<script setup lang="ts">
// type Props = {
//   description: string
//   cardTitle: string
//   prices: number[]
// }

import type { ProductCard } from '@/types/card'
import TheButton from './TheButton.vue'
defineProps<ProductCard>()
</script>

<template>
  <div class="card">
    <img :src="imgURL" alt="producto caja" />
    <h3>{{ cardTitle }}</h3>
    <p>{{ cardDescription }}</p>
    <p>{{ cardPrice }}</p>
    <TheButton class="button-text">{{ buttonText }}</TheButton>
  </div>
</template>

<style scoped lang="scss">
.card {
  background-color: black;
  border: solid 0.1em black;
  padding: 1em;
  border-radius: 3%;
  text-align: center;
  width: 15em;
  -webkit-box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.75);
  box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.75);
}

button {
  background-color: rgb(30, 30, 129);
}
</style>
