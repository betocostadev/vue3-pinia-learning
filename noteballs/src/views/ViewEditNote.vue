<template>
  <div class="edit-note">
    <AddEditNote
      v-model="noteContent"
      :typeOfAction="'edit'"
      bgColor="link"
      placeholder="Edit Note"
    >
      <template v-slot:cancel-btn>
        <button @click="$router.push('/')" class="button is-link is-light">Cancel</button>
      </template>

      <template #success-btn>
        <button
          @click="handleEditNote"
          :disabled="!noteContent"
          class="button is-link has-background-link"
        >
          Save Note
        </button>
      </template>
    </AddEditNote>
  </div>
</template>

<script setup>
import AddEditNote from '@/components/Notes/AddEditNote.vue'
import { onMounted, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useNotesStore } from '../stores/notes'

const noteContent = ref('')

const route = useRoute()
const router = useRouter()
const notesStore = useNotesStore()

const handleEditNote = () => {
  notesStore.editNote({ id: route.params.id, content: noteContent.value })
  router.push('/')
}

onMounted(() => {
  noteContent.value = notesStore.getNote(route.params.id).content
})
</script>

<style scoped></style>
