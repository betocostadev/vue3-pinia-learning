<template>
  <div class="home">
    <h1>{{ appTitle }}</h1>

    <h3>{{ counterTitle }}</h3>
    <div>
      <button class="btn" @click="decreaseCounter">-</button>
      <span class="counter">{{ counter }}</span>
      <button class="btn" @click="increaseCounter">+</button>
    </div>

    <div class="edit">
      <h4>Edit counter title:</h4>
      <input v-model="counterTitle" text="input" />
    </div>

    <h3 class="second-counter-title">{{ otherCounterData.title }}</h3>
    <div>
      <button class="btn" @click="decreaseCounterTwo(10, $event)">- 10</button>
      <button class="btn" @click="decreaseCounterTwo(1, $event)">- 1</button>
      <span class="counter">{{ otherCounterData.count }}</span>
      <button class="btn" @click="increaseCounterTwo(1)">+ 1</button>
      <button class="btn" @click="increaseCounterTwo(10)">+ 10</button>
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
import { reactive, ref } from 'vue'

// Use non-reactive Data for best performance if you don't need it to change.
const appTitle = 'My Amazing Counter App'

const counterTitle = ref('Setup counter'),
  counter = ref(0)

const otherCounterData = reactive({
  title: 'The second Counter',
  count: 0,
})

const increaseCounter = () => counter.value++
const decreaseCounter = () => counter.value--

const increaseCounterTwo = (amount) => (otherCounterData.count += amount)
// Passing also the $event
const decreaseCounterTwo = (amount, evt) => {
  console.log(evt)
  otherCounterData.count -= amount
}
</script>

<style>
.home {
  text-align: center;
  padding: 20px;
}

.edit {
  margin-top: 50px;
}

.second-counter-title {
  margin-top: 30px;
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
