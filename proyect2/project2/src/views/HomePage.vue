<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { ref } from 'vue'
import TheTitle from '@/components/TheTitle.vue'
import TheCounter from '@/components/TheCounter.vue'
import ParentComponent from '@/components/ParentComponent.vue'
import FacebookIcon from '@/components/FacebookIcon.vue'
import TwiterIcon from '@/components/TwiterIcon.vue'
import TheButton from '@/components/TheButton.vue'

const currentRrss = ref('FacebookIcon')
const rrss = {
  FacebookIcon,
  TwiterIcon,
}
</script>

<template>
  <div class="bar">
  <nav class="navbar">
    <div>
    <RouterLink class="button" to="/">Home</RouterLink>
    <RouterLink class="button" to="/catalogo">Catalogo</RouterLink>
  </div>

    <div>
      <TheButton v-for="(component, name) in rrss" :key="name" @click="currentRrss = name">
        {{ name }}
      </TheButton>
      <component :is="rrss[currentRrss as keyof typeof rrss]"></component>
    </div>
  </nav>
</div>

  <TheTitle>Titulo Estatico</TheTitle>

  <TheCounter />
  <ParentComponent />

  <RouterView />
</template>

<style scoped lang="scss">
.button {
  color: white;
  background-color: black;
  padding: 0.3em;
  margin: 0.3em;
}

.navbar {
  margin: 1.5em;
  display: flex;
  justify-content: space-between;
}


</style>
