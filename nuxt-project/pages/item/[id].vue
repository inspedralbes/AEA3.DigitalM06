<script setup>
const route = useRoute()
const id = route.params.id
</script>

<template>
  <div class="item-detail">
    <h1>Detall de l'Anime {{ id }}</h1>
  </div>
</template>

<style scoped>
.item-detail {
  padding: 1rem;
}
</style>
