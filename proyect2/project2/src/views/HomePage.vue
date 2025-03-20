<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { ref } from 'vue'
import TheTitle from '@/components/TheTitle.vue'
import TheCounter from '@/components/TheCounter.vue'
import ParentComponent from '@/components/ParentComponent.vue'
import FacebookIcon from '@/components/FacebookIcon.vue'
import TwiterIcon from '@/components/TwiterIcon.vue'

const currentRrss = ref('FacebookIcon')
const rrss = {
  FacebookIcon,
  TwiterIcon,
}
</script>

<template>
  <nav class="navbar">
    <RouterLink class="button" to="/">Home</RouterLink>
    <RouterLink class="button" to="/catalogo">Catalogo</RouterLink>

    <div>
      <button v-for="(_, red) in rrss" :key="red" @click="currentRrss = red">
        {{ red }}
      </button>
      <component :is="rrss[currentRrss]"></component>
    </div>
  </nav>

  <TheTitle>Titulo Estatico</TheTitle>

  <TheCounter />
  <ParentComponent />

  <RouterView />
</template>

<style scoped lang="scss">
.button {
  color: white;
  background-color: black;
  padding: 0.5em;
  margin: 0.3em;
}

.navbar {
  margin: 1.5em;
}
</style>
