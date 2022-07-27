// Watch the characters count when it reaches 120
import { watch } from 'vue'

// watch(newNote, (newValue, oldValue) => {
export function useWatchCharacters(valueToWatch) {
  watch(valueToWatch, (newValue) => {
    if (newValue.length === 120) {
      alert('Ops! Max number of characters is 120! Sorry, we are poor.')
    }
  })
}
