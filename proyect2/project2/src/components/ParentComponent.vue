<script setup lang="ts">
import ChildComponent from './ChildComponent.vue'
import { ref } from 'vue'

const message = ref('')

const changeMessage = (msg) => {
  message.value = msg
}
</script>
<template>
  <div>
    <ChildComponent @greeting="changeMessage" />
    <p>mesage from child: {{ message }}</p>
  </div>
</template>

<style lang="scss" scoped></style>
