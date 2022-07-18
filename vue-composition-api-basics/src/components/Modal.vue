<template>
  <Teleport to=".modals-container">
    <div class="modal">
      <h2><slot name="title" /></h2>
      <h4>{{ subtitle }}</h4>
      <slot />
      <button @click="handleCloseModal">Hide Modal</button>
    </div>
  </Teleport>
</template>

<script setup>
import { useSlots } from 'vue'

const slots = useSlots()

console.log(slots.title())

const props = defineProps({
  subtitle: {
    type: String,
    default: 'No subtitle specified',
  },
})

const emits = defineEmits({
  hideModal: {
    type: Function,
  },
})

const handleCloseModal = () => {
  emits('hideModal')
}
</script>

<style scoped>
.modal {
  background: var(--color-background);
  box-shadow: 1px 2px 4px 2px rgb(51, 51, 51);
  padding: 10px;
  position: absolute;
  top: 10%;
  left: 10%;
  width: 80vw;
  height: 60vh;
  z-index: 1;
}
</style>
