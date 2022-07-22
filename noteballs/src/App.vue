<template>
  <header>
    <NavBar />
  </header>
  <!-- <RouterLink to="/" class="button">Notes</RouterLink>
  <RouterLink to="stats" class="button">Stats</RouterLink> -->
  <RouterView />
  <!-- <main></main> -->
</template>

<script setup>
import NavBar from './components/layout/NavBar.vue'
</script>

<style>
@import 'bulma/css/bulma.min.css';
</style>
