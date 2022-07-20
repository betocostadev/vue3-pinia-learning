<template>
  <div class="user-data">
    {{ userData.name }} @{{ userData.username }} | Network status:
    <span :style="{ color: online ? 'green' : 'red' }">{{ online ? 'Online' : 'Offline' }}</span>
  </div>
  <nav>
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/modals">Modals</RouterLink>
    <RouterLink to="/posts">Posts</RouterLink>
  </nav>

  <RouterView />

  <!-- If you were to use the activated hook in the components, we would need to keep alive the components
as it is below -->
  <!-- <router-view v-slot="{ Component }">
    <keep-alive>
      <component :is="Component" />
    </keep-alive>
  </router-view> -->
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { provide, reactive } from 'vue'

// VueUse lib
import { useOnline } from '@vueuse/core'

const online = useOnline()

const userData = reactive({
  name: 'Beto',
  username: 'betocostadev',
})

provide('userData', userData)
</script>

<style>
@import '@/assets/base.css';

#app {
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;

  font-weight: normal;
}

header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

a,
.green {
  text-decoration: none;
  color: hsla(160, 100%, 37%, 1);
  transition: 0.4s;
}

@media (hover: hover) {
  a:hover {
    background-color: hsla(160, 100%, 37%, 0.2);
  }
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}
</style>
