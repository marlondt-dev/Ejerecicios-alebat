<script setup lang="ts">
import { defineEmits, inject } from 'vue'
import TheButton from './TheButton.vue'

const emit = defineEmits(['greeting'])
const injectMessage = inject('message')

function clicking() {
  emit('greeting', ' saying hello to my father')
}
</script>
<template>
  <TheButton @click="clicking">EMMIT</TheButton>
  <p>INJECT: {{ injectMessage }}</p>
</template>

<style lang="scss" scoped></style>
