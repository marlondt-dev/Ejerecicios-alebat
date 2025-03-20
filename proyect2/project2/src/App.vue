<script setup lang="ts">
import { RouterView } from 'vue-router'
import { useCounter } from '@/composables/useCounter'

const { counter } = useCounter()
</script>
<template>
  <RouterView />
  {{ counter }}
</template>
