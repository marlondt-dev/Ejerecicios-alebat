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
  color: rgb(83, 26, 26);
}
</style>
