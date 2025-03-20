import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

export const useContStore = defineStore('cont', () => {
  const count = ref(0)
  function increment() {
    count.value++
  }

  function decrement() {
    count.value--
  }

  function reset() {
    count.value = 0
  }

  const double = computed(() => count.value * 2)

  return { count, increment, decrement, reset, double }
})
