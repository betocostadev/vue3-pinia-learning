<template>
  <div class="card mb-4">
    <div class="card-content">
      <div class="content">
        <p>{{ note.content }}</p>
        <div class="columns is-mobile has-text-grey-light mt-2">
          <small class="column">{{ charLength }}</small>
          <small class="column has-text-right">{{ lastUpdated }}</small>
        </div>
      </div>
    </div>
    <footer class="card-footer">
      <RouterLink :to="`/edit-note/${note.id}`" href="#" class="card-footer-item">Edit</RouterLink>
      <a @click.prevent="promptToDeleteNote" href="#" class="card-footer-item">Delete</a>
    </footer>
    <ModalDeleteNote v-if="modals.deleteNote" v-model="modals.deleteNote" :noteId="note.id" />
  </div>
</template>

<script setup>
import { computed, reactive } from 'vue'
import { useNotesStore } from '@/stores/notes'
import ModalDeleteNote from './ModalDeleteNote.vue'

const notesStore = useNotesStore()

const props = defineProps({
  note: {
    type: Object,
    required: true,
  },
})

const charLength = computed(() => {
  return !props.note.content
    ? 0
    : props.note.content.length > 1
    ? `${props.note.content.length} characters`
    : `${props.note.content.length} character`
})

const lastUpdated = computed(() => `last update: ${notesStore.getNoteDate(props.note.id).value}`)

const promptToDeleteNote = () => {
  modals.deleteNote = true
}

// MODALS

const modals = reactive({
  deleteNote: false,
})
</script>

<style></style>
