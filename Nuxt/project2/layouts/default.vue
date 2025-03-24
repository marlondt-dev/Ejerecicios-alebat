<script setup lang="ts"></script>
<template>
  <div>
      <h2>Menu</h2>
    <slot />
    <footer><h2>Footer</h2></footer>
  </div>
</template>

<style lang="scss" scoped>
.button {
  color: white;
  background-color: black;
  padding: 0.5em;
  margin: 0.3em;
  text-decoration: none;
}
.navbar{
  display: flex;
}
</style>
