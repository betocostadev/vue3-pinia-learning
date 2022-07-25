<template>
  <div class="edit-note">
    <h1>Edit Note</h1>
    <AddEditNote :typeOfAction="'edit'" v-model="newNote">
      <template v-slot:cancel-btn>
        <button
          @click="newNote = ''"
          :disabled="!newNote"
          class="button is-link has-background-danger"
        >
          Cancel
        </button>
      </template>

      <template #success-btn>
        <button @click="addNote" :disabled="!newNote" class="button is-link has-background-success">
          Add note
        </button>
      </template>
    </AddEditNote>
  </div>
</template>

<script setup>
import AddEditNote from '@/components/Notes/AddEditNote.vue'
</script>

<style scoped></style>
