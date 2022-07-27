<template>
  <div class="notes">
    <AddEditNote v-model="newNote" ref="addEditNoteRef" :typeOfAction="'add'">
      <template #cancel-btn>
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

    <Note v-for="note in notesStore.notes" :key="note.id" :note="note" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useNotesStore } from '@/stores/notes'
import { useWatchCharacters } from '@/use/useWatchCharacters'

import Note from '@/components/Notes/Note.vue'
import AddEditNote from '@/components/Notes/AddEditNote.vue'

const notesStore = useNotesStore()

const newNote = ref('')
const addEditNoteRef = ref(null)

const addNote = () => {
  notesStore.addNote(newNote.value)
  newNote.value = ''

  addEditNoteRef.value.focusText()
}

// Vue use - Watch characters

useWatchCharacters(newNote, 120)
</script>

<style></style>
