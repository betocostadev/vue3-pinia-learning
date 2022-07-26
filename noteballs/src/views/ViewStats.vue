<template>
  <div class="stats">
    <h1>Noteballs Stats</h1>
    <table class="table is-fullwidth">
      <thead>
        <tr>
          <th>Stat</th>
          <th>Value</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Number of Notes</td>
          <td>{{ notesStore.getNoteCount }}</td>
        </tr>
        <tr>
          <td>Number of Characters (all notes)</td>
          <td>{{ notesStore.getNotesCharactersCount }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { useNotesStore } from '../stores/notes'

const notesStore = useNotesStore()
</script>

<style></style>
