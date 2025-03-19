<script setup lang="ts">
import { defineEmits, inject } from 'vue'


const emit = defineEmits(['greeting'])
const newMessage = inject('message')

function clicking() {
  emit('greeting', ' saying hello to my father')
}
</script>
<template>
  <button @click="clicking">EMMIT</button>
  <p>
    INJECT: {{ newMessage }}
  </p>
</template>

<style lang="scss" scoped></style>
