<template>
  <NuxtLayout>
    <NuxtLink class="btn" to="/home" >Home</NuxtLink>
    <NuxtLink class="btn" to="/productos" >Productos</NuxtLink>
    <NuxtLink class="btn" to="/catalogo" >Catalogo</NuxtLink>
    <NuxtPage />
    
  </NuxtLayout>
</template>

<style scoped lang="scss">
.btn{
  border: none;
    background-color: rgb(0, 0, 0);
    color: rgb(246, 246, 250);
    text-align: center;
    padding: 0.8em;
    border-radius: 5%;
    margin: 0.5em;
    text-decoration: none;
}
</style>
