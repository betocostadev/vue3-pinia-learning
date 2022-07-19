<template>
  <Teleport to=".modals-container">
    <div v-if="modelValue" class="modal">
      <h2><slot name="title" /></h2>
      <h4>{{ subtitle }}</h4>
      <slot />
      <p><strong>Injected props from App.vue:</strong></p>
      <p>Username is: {{ userData.username }}</p>
      <button @click="$emit('update:modelValue', false)">update:modelValue</button>
    </div>
  </Teleport>
</template>

<script setup>
import { inject } from 'vue'

const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false,
  },
  subtitle: {
    type: String,
    default: 'No subtitle specified',
  },
})

const userData = inject('userData')

// Works fine. But it is easier to use in the markup, as it is above
// const emits = defineEmits({
//   'update:modelValue': {
//     type: Function,
//   },
// })

// const handleUpdateModel = () => {
//   emits('update:modelValue', false)
// }
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
