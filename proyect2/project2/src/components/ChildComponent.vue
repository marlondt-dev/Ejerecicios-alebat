<script setup lang="ts">
import { defineEmits } from 'vue'

const emit = defineEmits(['greeting'])

function clicking() {
  emit('greeting', ' saying hello to my father')
}
</script>
<template>
  <button @click="clicking">Say hi</button>
</template>

<style lang="scss" scoped></style>
