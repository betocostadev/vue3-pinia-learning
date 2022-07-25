<template>
  <div class="card mb-4">
    <div class="card-content">
      <div class="content">
        <p>{{ note.content }}</p>
        <div class="has-text-right has-text-grey-light mt-2">
          <small>{{ charLength }}</small>
        </div>
      </div>
    </div>
    <footer class="card-footer">
      <a href="#" class="card-footer-item">Edit</a>
      <a @click="handleDeleteNote" href="#" class="card-footer-item">Delete</a>
    </footer>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  note: {
    type: Object,
    required: true,
  },
})

const emits = defineEmits({
  deleteNote: {
    type: Function,
  },
})

const charLength = computed(() => {
  return !props.note.content
    ? 0
    : props.note.content.length > 1
    ? `${props.note.content.length} characters`
    : `${props.note.content.length} character`
})

const handleDeleteNote = () => {
  emits('deleteNote', props.note.id)
}
</script>

<style></style>
