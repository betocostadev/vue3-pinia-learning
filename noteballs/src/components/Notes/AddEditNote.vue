<template>
  <div class="card has-background-success-dark p-4 mb-5">
    <div class="field">
      <slot name="header" />
      <label class="label" :style="{ color: 'white' }">{{
        typeOfAction === 'add' ? 'Add a New Note' : 'Edit Note'
      }}</label>
      <div class="control">
        <textarea
          v-model="modelValue"
          @input="$emit('update:modelValue', modelValue)"
          class="textarea"
          placeholder="Start adding your note here..."
          ref="textAreaRef"
        />
      </div>
    </div>

    <div class="field is-grouped is-grouped-right">
      <div class="control">
        <slot name="cancel-btn" />
      </div>
      <div class="control">
        <slot name="success-btn" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
  typeOfAction: {
    type: String,
    required: true,
  },
  modelValue: {
    type: String,
    required: true,
  },
})

const emits = defineEmits({
  'update:modelValue': {
    type: Function,
  },
})

const textAreaRef = ref(null)

const focusText = () => {
  textAreaRef.value.focus()
}

defineExpose({
  focusText,
})
</script>

<style scoped></style>
