<script setup lang="ts">
defineProps<{
  text: string | number
}>()
</script>

<template>
  <button class="main-button">{{ text }}</button>
</template>

<style lang="scss" scoped>
.main-button {
  background-color: black;
  padding: 0.6em;
}
</style>
