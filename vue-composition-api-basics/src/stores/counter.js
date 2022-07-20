import { defineStore } from 'pinia'

export const useCounterStore = defineStore({
  id: 'counter',
  state: () => ({
    count: 0,
    title: 'Stored Counter',
  }),
  actions: {
    incrementCount() {
      this.count++
    },
    incrementCountByAmount(amount) {
      this.count += amount
    },
    decrementCount() {
      this.count--
    },
    decrementCountByAmount(amount) {
      this.count -= amount
    },
  },
  getters: {
    doubleCount: (state) => state.count * 2,
    oddOrEven: (state) => (state.count % 2 === 0 ? 'Even' : 'Odd'),
  },
})
