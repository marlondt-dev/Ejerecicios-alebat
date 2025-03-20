<script setup lang="ts">
// import { useCounter } from '@/composables/useCounter'
import TheButton from '@/components/TheButton.vue'
import { ref, watchEffect } from 'vue'
import { useContStore } from '@/stores/cont'

// const { counter, increase, decrease, reset } = useCounter(0)

const cont = useContStore()

// const double = computed(() => counter.value * 2)

const message = ref('')

watchEffect(() => {
  if (cont.count === 0) {
    message.value = 'Estas en el valor minimo'
  } else if (cont.count === 10) {
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

  <TheButton v-if="cont.count < 10" @click="cont.increment()" :color="'increase'"
    >INCREMENTAR</TheButton
  >

  <TheButton :text="'DECREASE'" v-if="cont.count > 0" @click="cont.decrement" :color="'decrease'"
    >DECREASE</TheButton
  >

  <div>
    <TheButton :class="{ 'button-colored': cont.count === 10 }">{{ cont.count }} </TheButton>
    <TheButton>{{ cont.double }}</TheButton>
    <TheButton v-if="cont.count > 0" :text="'RESET'" @click="cont.reset">RESET</TheButton>
  </div>
</template>

<style scoped lang="scss">
.button-colored {
  background-color: green;
}
</style>
