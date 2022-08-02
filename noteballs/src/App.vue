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
import { useNotesStore } from './stores/notes'

const notesStore = useNotesStore()

onMounted(() => notesStore.getNotes())
</script>

<style>
@import 'bulma/css/bulma.min.css';
</style>
