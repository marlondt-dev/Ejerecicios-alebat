<script setup lang="ts">
// defineProps<{
//   propTitle: string
// }>()
</script>

<template>
  <h2 class="titulo">
    <slot></slot>
  </h2>
</template>

<style scoped lang="scss">
.titulo {
  color: white;
}
</style>
