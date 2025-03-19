<script setup lang="ts">
// defineProps<{
//   text: string | number
// }>()
// defineProps<{
//   isDecrease: boolean
// }>()
</script>

<template>
  <button class="main-button"><slot></slot></button>
</template>

<style lang="scss" scoped>
.main-button {
  background-color: black;
  padding: 0.6em;
  cursor: pointer;
}

.decrease {
  background-color: red;
}
</style>
