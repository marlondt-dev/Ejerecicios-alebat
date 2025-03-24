<script setup lang="ts">
import {useRoute} from 'vue-router'

 const route = useRoute()
 const title = route.params.title
 const category = route.params.category
</script>

<template>
    <div>
        <h3>Estamos en la categoria {{ category }}</h3>
        <h3>Estas viendo: {{ title }}</h3>

        <NuxtLink to="/series-bonitas" >Categorias</NuxtLink>
    </div>
</template>