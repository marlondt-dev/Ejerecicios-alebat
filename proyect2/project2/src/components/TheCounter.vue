<script setup lang="ts">
import { useCounter } from '@/composables/useCounter'
import TheButton from '@/components/TheButton.vue'
import { computed } from 'vue'

const { counter, increase, decrease, reset } = useCounter(0)

const doble = computed(() => counter.value * 2)

// const counter = ref(0)

// const increase = () => counter.value++
// const decrease = () => counter.value--
</script>

<template>
  <TheButton
    :text="'INCREASE'"
    v-if="counter < 10"
    @click="increase"
    class="button button--increase"
  ></TheButton>

  <TheButton :text="'DECREASE'" v-if="counter > 0" @click="decrease" class="button button--decrease"
    >DECREASE</TheButton
  >

  <div>
    <TheButton
      :text="counter"
      class="button button--result"
      :class="{ 'button--colored': counter === 10 }"
    >
    </TheButton>
    <TheButton :text="doble"></TheButton>

    <TheButton :text="'RESET'" @click="reset" class="button button--reset"></TheButton>
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
