<script setup lang="ts">
// defineProps<{
//   text: string | number
// }>()
// defineProps<{
//   isDecrease: boolean
// }>()

defineProps<{
  color?: 'decrease' | 'increase'
}>()
</script>

<template>
  <button class="main-button" :class="color"><slot></slot></button>
</template>

<style lang="scss" scoped>
.main-button {
  padding: 0.6em;
  margin: 0.3em;
  cursor: pointer;
  transition: 0.2s ease;
}

.decrease {
  background-color: red;
}

.increase {
  background-color: green;
}

.main-button:hover {
  color: rgb(38, 18, 151);
}
</style>
