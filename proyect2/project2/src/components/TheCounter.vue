<script setup lang="ts">
// import { useCounter } from '@/composables/useCounter'
import TheButton from '@/components/TheButton.vue'
import { ref, watchEffect } from 'vue'
import { useCounterStore } from '@/stores/counter'

// const { counter, increase, decrease, reset } = useCounter(0)

const counter = useCounterStore()

// const double = computed(() => counter.value * 2)

const message = ref('')

watchEffect(() => {
  if (counter.count === 0) {
    message.value = 'Estas en el valor minimo'
  } else if (counter.count === 10) {
    message.value = 'Estas en el valor máximo'
  } else {
    message.value = 'Estas en los parametros adecuados'
  }
})

// const counter = ref(0)

// const increase = () => counter.value++
// const decrease = () => counter.value--
</script>

<template>
  <h3>{{ message }}</h3>

  <TheButton v-if="counter.count < 10" @click="counter.increment()" :color="'increase'"
    >INCREMENTAR</TheButton
  >

  <TheButton
    :text="'DECREASE'"
    v-if="counter.count > 0"
    @click="counter.decrement"
    :color="'decrease'"
    >DECREASE</TheButton
  >

  <div>
    <TheButton :class="{ 'button-colored': counter.count === 10 }">{{ counter.count }} </TheButton>
    <TheButton>{{ counter.double }}</TheButton>
    <TheButton v-if="counter.count > 0" :text="'RESET'" @click="counter.reset">RESET</TheButton>
  </div>
</template>

<style scoped lang="scss">
.button-colored {
  background-color: green;
}
</style>
