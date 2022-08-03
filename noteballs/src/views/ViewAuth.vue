<template>
  <div class="auth">
    <div class="card">
      <div class="card-content">
        <div class="content">
          <div class="tabs is-centered">
            <ul class="m-0">
              <li :class="{ 'is-active': !register }">
                <a @click.prevent="register = false">Login</a>
              </li>
              <li :class="{ 'is-active': register }">
                <a @click.prevent="register = true">Register</a>
              </li>
            </ul>
          </div>
          <div v-if="!register" class="auth-form mt-4">
            <div class="title has-text-centered">{{ formTitle }}</div>
          </div>
          <div v-else class="auth-form mt-4">
            <div class="title has-text-centered">{{ formTitle }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from '@vue/reactivity'
import { ref } from 'vue'

const register = ref(false)

const formTitle = computed(() => (register.value ? 'Register' : 'Login'))
</script>

<style scoped>
.auth-form {
  max-width: 400px;
  margin: 0 auto;
}
</style>
