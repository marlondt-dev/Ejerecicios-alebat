<script setup lang="ts">
import { defineEmits, inject } from 'vue'
import TheButton from './TheButton.vue'

const emit = defineEmits(['greeting'])
const newMessage = inject('message')

function clicking() {
  emit('greeting', ' saying hello to my father')
}
</script>
<template>
  <TheButton :text="'EMMIT'" @click="clicking"></TheButton>
  <p>INJECT: {{ newMessage }}</p>
</template>

<style lang="scss" scoped></style>
