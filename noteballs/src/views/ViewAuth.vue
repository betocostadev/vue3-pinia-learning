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
          <div v-if="!register" class="auth-form mt-5">
            <div class="title has-text-centered">{{ formTitle }}</div>
            <form @submit.prevent="onSubmit">
              <div class="field">
                <label class="label">Email</label>
                <div class="control">
                  <input
                    v-model="credentials.email"
                    class="input"
                    type="email"
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              <div class="field">
                <label class="label">Password</label>
                <div class="control">
                  <input
                    v-model="credentials.password"
                    class="input"
                    type="password"
                    placeholder="Enter your password"
                  />
                </div>
              </div>

              <div class="form buttons is-fullwidth mt-5 mb-5">
                <button
                  class="button is-success is-fullwidth"
                  :disabled="
                    (!register && credentials.email.length < 5) ||
                    (!register && credentials.password.length < 5)
                  "
                >
                  Login
                </button>
                <button class="button is-light mt-2">Forgot your password?</button>
                <button class="button is-light mt-2" @click.prevent="register = true">
                  New here? Register!
                </button>
              </div>
            </form>
          </div>
          <div v-else class="auth-form mt-4">
            <div class="title has-text-centered">{{ formTitle }}</div>
            <form @submit="onSubmit">
              <div class="field">
                <label class="label">Email</label>
                <div class="control">
                  <input
                    v-model="credentials.email"
                    class="input"
                    type="email"
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              <div class="field">
                <label class="label">Password</label>
                <div class="control">
                  <input
                    v-model="credentials.password"
                    class="input"
                    type="password"
                    placeholder="Enter your password"
                  />
                </div>
              </div>

              <div class="field">
                <label class="label">Password confirmation</label>
                <div class="control">
                  <input
                    v-model="credentials.confirmPassword"
                    class="input"
                    type="password"
                    placeholder="Use the same password"
                  />
                </div>
              </div>

              <div class="is-fullwidth mt-5">
                <button
                  class="button is-info is-fullwidth mt-5 mb-5"
                  :disabled="registerBtnDisabled"
                >
                  Register
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, computed } from 'vue'

const register = ref(false)

const formTitle = computed(() => (register.value ? 'Register' : 'Login'))

const onSubmit = () => {
  if (register.value) {
    console.log('Register')
  } else {
    console.log('Login')
  }
}

const credentials = reactive({
  email: '',
  password: '',
  confirmPassword: '',
})

const registerBtnDisabled = computed(() => {
  if (register.value) {
    return (
      credentials.email.length < 5 ||
      credentials.password.length < 5 ||
      credentials.password !== credentials.confirmPassword
    )
  }
  return true
})
</script>

<style scoped>
.auth-form {
  max-width: 400px;
  margin: 0 auto;
}
</style>
