<script setup lang="ts">
import { ref } from 'vue'
import {useCounter} from '@/composables/useCounter'

const {counter, increase, decrease, reset} = useCounter(0)
// const counter = ref(0)

// const increase = () => counter.value++
// const decrease = () => counter.value--
</script>

<template>
  <button v-if="counter < 10" @click="increase" class="button button--increase">INCREASE</button>
  <button v-if="counter > 0" @click="decrease" class="button button--decrease">DECREASE</button>
  <button @click="reset" class="button button--reset">RESET</button>
  <button class="button button--result">{{ counter }}</button>
</template>

<style scoped lang="scss">
.button {
  margin: 1em;

  &--increase {
    background-color: green;
  }

  &--decrease {
    background-color: red;
  }

  &--reset{
    background-color: rgb(19, 27, 25);
  }

  &--result {
    background-color: rgb(0, 0, 0);
  }
}
</style>
