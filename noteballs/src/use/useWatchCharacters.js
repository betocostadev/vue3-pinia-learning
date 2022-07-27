// Watch the characters count when it reaches 120
import { watch } from 'vue'

// watch(newNote, (newValue, oldValue) => {
export function useWatchCharacters(valueToWatch, maxChars = 120) {
  watch(valueToWatch, (newValue) => {
    if (newValue.length === maxChars) {
      alert(`Ops! Max number of characters is ${maxChars}! Sorry, we are poor.`)
    }
  })
}
