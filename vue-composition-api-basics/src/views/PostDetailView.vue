<template>
  <div class="post-detail">
    <h2>Post Detail</h2>
    <p>Contents of the post {{ $route.params.id }}</p>
    <p class="btn-back"><RouterLink to="/posts">&lt; Back</RouterLink></p>
  </div>
</template>

<script setup></script>

<style scoped>
.btn-back {
  margin-top: 2rem;
}
</style>
