<script setup lang="ts">
import { useRoute } from 'vue-router'

const route = useRoute()
const category = route.params.category

</script>
<template>
    <main>
        <h3>Estamos en la pagina categoria: {{ category }}</h3>

        <NuxtLink to="/series-bonitas">Categorias</NuxtLink>
        <div>
            <p>Episodios disponibles: </p>
            <ul>
                <li>
                    <NuxtLink :to="`/series-bonitas/${category}/episodio-1-spiderman`">Episodio 1 de Spiderman</NuxtLink>
                </li>
            </ul>

        </div>
    </main>
</template>

<style lang="scss" scoped>
p {
    margin: 1em;
}
</style>