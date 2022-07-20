<template>
  <div class="posts">
    <h1>Posts</h1>

    <ul>
      <li v-for="post in posts" :key="post.id">
        <RouterLink :to="`/postDetail/${post.id}`">{{ post.title }}</RouterLink>
      </li>
    </ul>

    <textarea v-autofocus />

    <div>
      <button
        class="counter-button"
        :class="{ yellow: counterOddEven === 'odd' }"
        @click="increaseCounter"
      >
        {{ counter }}
      </button>
    </div>
  </div>
</template>

<script setup>
import { vAutofocus } from '@/directives/vAutofocus'
import { ref } from 'vue'
import { useCounter } from '@/use/useCounter'

const posts = ref([
  {
    id: 1,
    title: 'Post 1',
  },
  {
    id: 2,
    title: 'Post 2',
  },
  {
    id: 3,
    title: 'Post 3',
  },
])

const { counter, increaseCounter, counterOddEven } = useCounter()
</script>

<style>
ul {
  margin-bottom: 30px;
}

.counter-button {
  cursor: pointer;
  font-size: 3rem;
  width: 50%;
  background-color: pink;
}

.counter-button.yellow {
  background-color: yellow;
}
</style>
