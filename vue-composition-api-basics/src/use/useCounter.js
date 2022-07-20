import { ref, onMounted, computed } from 'vue'

// By declaring here, the counter becomes a global object.
// Check the home page, you can increase the counter, and change page
const counter = ref(0)

export function useCounter() {
  const counterTitle = ref('Not a setup, now a composable counter')

  const increaseCounter = () => counter.value++
  const decreaseCounter = () => counter.value--
  const counterOddEven = computed(() => (counter.value % 2 === 0 ? 'even' : 'odd'))

  onMounted(() => increaseCounter())

  return {
    counter,
    counterTitle,
    increaseCounter,
    decreaseCounter,
    counterOddEven,
  }
}
