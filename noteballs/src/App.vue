<template>
  <header>
    <NavBar />
  </header>
  <main class="container is-max-desktop px-2 py-4">
    <RouterView />
  </main>
</template>

<script setup>
import { onMounted } from 'vue'
import NavBar from './components/layout/NavBar.vue'
import { useAuthStore } from './stores/auth'

const authStore = useAuthStore()

onMounted(() => {
  authStore.initAuth()
})
</script>

<style>
@import 'bulma/css/bulma.min.css';
</style>
