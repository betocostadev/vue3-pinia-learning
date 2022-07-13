<template>
  <div class="home">
    <h1>Home</h1>

    <h3>{{ counterTitle }}</h3>
    <div>
      <button class="btn" @click="decreaseCounter">-</button>
      <span class="counter">{{ counter }}</span>
      <button class="btn" @click="increaseCounter">+</button>
    </div>
  </div>
</template>

<!-- <script>
export default {
  data() {
    return {
      counter: 0,
    }
  },

  methods: {
    increaseCounter() {
      this.counter++
    },
    decreaseCounter() {
      this.counter--
    },
  },
}
</script> -->

<!-- <script>
import { ref } from 'vue'

export default {
  setup() {
    const counter = ref(0)
    const increaseCounter = () => counter.value++
    const decreaseCounter = () => counter.value--

    return { counter, increaseCounter, decreaseCounter }
  },
}
</script> -->

<script setup>
import { ref } from 'vue'

const counterTitle = ref('Setup counter'),
  counter = ref(0)

const increaseCounter = () => counter.value++
const decreaseCounter = () => counter.value--
</script>

<style>
.home {
  text-align: center;
  padding: 20px;
}

.btn,
.counter {
  font-size: 2rem;
  margin: 10px;
}

.btn {
  cursor: pointer;
}
</style>
