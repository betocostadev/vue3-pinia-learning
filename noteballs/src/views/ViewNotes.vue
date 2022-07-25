<template>
  <div class="notes">
    <div class="card has-background-success-dark p-4 mb-5">
      <div class="field">
        <label class="label" :style="{ color: 'white' }">Add a New Note</label>
        <div class="control">
          <textarea
            v-model="newNote"
            class="textarea"
            placeholder="Start adding your note here..."
            ref="newNoteRef"
          />
        </div>
      </div>

      <div class="field is-grouped is-grouped-right">
        <div class="control">
          <button
            @click="newNote = ''"
            :disabled="!newNote"
            class="button is-link has-background-danger"
          >
            Cancel
          </button>
        </div>
        <div class="control">
          <button
            @click="addNote"
            :disabled="!newNote"
            class="button is-link has-background-success"
          >
            Add note
          </button>
        </div>
      </div>
    </div>

    <Note v-for="note in notes" :key="note.id" :note="note" @deleteNote="deleteNote" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Note from '@/components/Notes/Note.vue'
import { useNotesStore } from '@/stores/notes'

const newNote = ref('')
const newNoteRef = ref(null)

const { notes } = useNotesStore()

const addNote = () => {
  const currentDate = new Date().getTime()
  const note = {
    id: currentDate.toString(),
    content: newNote.value,
  }

  notes.value.unshift(note)
  newNote.value = ''
  newNoteRef.value.focus()
}

const deleteNote = (id) => {
  if (id) {
    notes.value = notes.value.filter((n) => n.id !== id)
  }
}
</script>

<style></style>
