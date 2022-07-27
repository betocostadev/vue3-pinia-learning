<template>
  <div class="modal is-active p-3">
    <div class="modal-background"></div>
    <div class="modal-card" ref="modalCardRef">
      <header class="modal-card-head">
        <p class="modal-card-title">Delete Note?</p>
        <button @click="closeModal" class="delete" aria-label="close"></button>
      </header>
      <section class="modal-card-body">
        <p>Are you sure you want to delete this note?</p>
      </section>
      <footer class="modal-card-foot is-justify-content-flex-end">
        <button @click="closeModal" class="button">Cancel</button>
        <button @click="" class="button is-danger">Delete Note</button>
      </footer>
    </div>
  </div>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from 'vue'
import { onClickOutside } from '@vueuse/core'

// Props
const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false,
  },
})

// Emits
const emits = defineEmits(['update:modelValue'])

// Close modal
const closeModal = () => emits('update:modelValue', false)

// VUE USE - ClickOutside to close
const modalCardRef = ref(null)

onClickOutside(modalCardRef, closeModal)

// Keyboard control

const handleEscKeyUp = (e) => (e.key === 'Escape' ? closeModal() : undefined)

onMounted(() => document.addEventListener('keyup', handleEscKeyUp))

onUnmounted(() => document.removeEventListener('keyup', handleEscKeyUp))
</script>

<style scoped></style>
