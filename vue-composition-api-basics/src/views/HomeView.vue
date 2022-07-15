<template>
  <div class="home">
    <h1>{{ appTitle }}</h1>

    <h3>{{ counterTitle }}</h3>
    <div>
      <button class="btn" @click="decreaseCounter">-</button>
      <span class="counter">{{ counter }}</span>
      <button class="btn" @click="increaseCounter">+</button>
    </div>

    <h4>The first counter number is {{ counterOddEven }}</h4>

    <div class="edit">
      <h4>Edit counter title:</h4>
      <input v-model="counterTitle" v-autofocus text="input" />
    </div>

    <h3 class="second-counter-title">{{ otherCounterData.title }}</h3>
    <div>
      <button class="btn" @click="decreaseCounterTwo(10, $event)">- 10</button>
      <button class="btn" @click="decreaseCounterTwo(1, $event)">- 1</button>
      <span class="counter">{{ otherCounterData.count }}</span>
      <button class="btn" @click="increaseCounterTwo(1)">+ 1</button>
      <button class="btn" @click="increaseCounterTwo(10)">+ 10</button>
    </div>

    <h5 v-if="showWarning" class="watcher-warning">{{ watcherWarning }}</h5>
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
import { computed } from '@vue/reactivity'
import {
  onActivated,
  onBeforeMount,
  onBeforeUnmount,
  onBeforeUpdate,
  onDeactivated,
  onMounted,
  onUnmounted,
  onUpdated,
  reactive,
  ref,
  watch,
} from 'vue'

import { vAutofocus } from '@/directives/vAutofocus'

// Use non-reactive Data for best performance if you don't need it to change.
const appTitle = 'My Amazing Counter App'

const counterTitle = ref('Setup counter'),
  counter = ref(0)

// Directives - now imported from directives
// v-autofocus on the template
// const vAutofocus = {
//   mounted: (el) => {
//     el.focus()
//   },
// }

// Reactive
const otherCounterData = reactive({
  title: 'The second Counter',
  count: 0,
})

const increaseCounter = () => counter.value++
const decreaseCounter = () => counter.value--
// You can use the same hook to keep the code easier to read
onMounted(() => increaseCounter())

const counterOddEven = computed(() => (counter.value % 2 === 0 ? 'even' : 'odd'))

const increaseCounterTwo = (amount) => (otherCounterData.count += amount)
// Passing also the $event
const decreaseCounterTwo = (amount, evt) => {
  console.log(evt)
  otherCounterData.count -= amount
}

const watcherWarning = 'The second counter was increased by 10!'
const showWarning = ref(false)
watch(
  () => otherCounterData.count,
  (newCount, oldCount) => (showWarning.value = newCount > oldCount + 9)
)

// Lifecycle hooks
onBeforeMount(() => console.log('Before Mount'))
onMounted(() => console.log('Mounted'))
onBeforeUnmount(() => console.log('Before Unmount'))
onUnmounted(() => console.log('Unmounted'))

// Only fired if the components are kept alive.
// If the are not showing but still in the background
onActivated(() => console.log('Activated'))
onDeactivated(() => console.log('Deactivated'))

// The update (can be performance expensive)
onBeforeUpdate(() => console.log('Before Update'))
onUpdated(() => console.log('Updated'))
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

.watcher-warning {
  margin-top: 1rem;
  color: brown;
}
</style>
