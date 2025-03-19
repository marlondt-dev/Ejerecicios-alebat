<script setup lang="ts">
import { useCounter } from '@/composables/useCounter'
import TheButton from '@/components/TheButton.vue'
import { computed, ref, watchEffect } from 'vue'

const { counter, increase, decrease, reset } = useCounter(0)

const double = computed(() => counter.value * 2)

const message = ref('')

watchEffect(() => {
  if (counter.value === 0) {
    message.value = 'Estas en el valor minimo'
  } else if (counter.value === 10) {
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

  <TheButton v-if="counter < 10" @click="increase" class="button button--increase"
    >INCREASE</TheButton
  >

  <TheButton
    :text="'DECREASE'"
    v-if="counter > 0"
    @click="decrease"
    class="button button--decrease"
    :is-decrease-button="true"
    >DECREASE</TheButton
  >

  <div>
    <TheButton class="button button--result" :class="{ 'button--colored': counter === 10 }"
      >{{ counter }}
    </TheButton>
    <TheButton>{{ double }}</TheButton>

    <TheButton v-if="counter > 0" :text="'RESET'" @click="reset" class="button button--reset"
      >RESET</TheButton
    >
  </div>
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

  &--reset {
    background-color: rgb(19, 27, 25);
  }

  &--result {
    background-color: rgb(0, 0, 0);
  }

  &--colored {
    background-color: green;
  }
}
</style>
