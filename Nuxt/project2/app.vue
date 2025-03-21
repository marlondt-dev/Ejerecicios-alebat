<template>
  <NuxtLayout>
    <div>
      <NuxtPage />
      <NuxtLink class="button" to="/home">Home</NuxtLink>
      <NuxtLink class="button" to="/catalogo">Catalogo</NuxtLink>
      <NuxtLink class="button" to="/productos">Productos</NuxtLink>
    </div>
  </NuxtLayout>
</template>

<style scoped lang="scss">
.button {
  color: white;
  background-color: black;
  padding: 0.5em;
  margin: 0.3em;
  text-decoration: none;
}
</style>
