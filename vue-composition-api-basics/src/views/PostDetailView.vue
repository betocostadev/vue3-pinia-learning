<template>
  <div class="post-detail">
    <h2>Post Detail</h2>
    <p>Contents of the post {{ $route.params.id }}</p>
    <p>This post ID is {{ postId }}</p>
    <div>
      <button class="btn-primary" @click="getPostId">Get Post ID</button>
    </div>
    <button class="btn-primary" @click="goHome">Go Home</button>
    <p class="btn-back"><RouterLink to="/posts">&lt; Back</RouterLink></p>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const postId = ref('')

const route = useRoute()
const router = useRouter()

const getPostId = () => (postId.value = route.params.id)

const goHome = () => router.push({ name: 'home' })
</script>

<style scoped>
.btn-back {
  margin-top: 2rem;
}
</style>
