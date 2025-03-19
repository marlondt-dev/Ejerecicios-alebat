<script setup lang="ts">
import ChildComponent from './ChildComponent.vue'
import { ref, provide } from 'vue'

const message = ref('')
const provideMessae = ref('Hello using provide')
provide('message', provideMessae)

const changeMessage = (msg = '') => {
  message.value = msg
}
</script>
<template>
  <div>
    <p>EMMIT MESSAGE: {{ message }}</p>
    <ChildComponent @greeting="changeMessage" />
  </div>
</template>

<style lang="scss" scoped></style>
