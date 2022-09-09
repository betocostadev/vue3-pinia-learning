<template>
  <nav class="navbar is-success" role="navigation" aria-label="main navigation">
    <div class="container is-max-desktop px-2">
      <div class="navbar-brand">
        <div class="navbar-item is-size-4 is-family-monospace">
          Noteballs
          <!-- <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28" /> -->
        </div>

        <a
          @click.prevent="showMobileNav = !showMobileNav"
          role="button"
          class="navbar-burger"
          :class="{ 'is-active': showMobileNav }"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
          ref="navbarBurgerRef"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div
        id="navbarBasicExample"
        class="navbar-menu"
        :class="{ 'is-active': showMobileNav }"
        ref="mobileNavRef"
      >
        <div class="navbar-start">
          <button class="button is-small is-info mt-3 ml-3" @click="logoutUser">Log out</button>
        </div>

        <div class="navbar-end">
          <RouterLink
            @click="showMobileNav = false"
            to="/"
            class="navbar-item"
            active-class="is-active"
          >
            Notes
          </RouterLink>

          <RouterLink
            @click="showMobileNav = false"
            to="/stats"
            class="navbar-item"
            active-class="is-active"
          >
            Stats
          </RouterLink>
          <div class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-link"> More </a>

            <div class="navbar-dropdown">
              <a class="navbar-item"> About </a>
              <a class="navbar-item"> Contact </a>
              <hr class="navbar-divider" />
              <a class="navbar-item"> Report an issue </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { onClickOutside } from '@vueuse/core'
import { useAuthStore } from '../../stores/auth'

// mobile nav
const showMobileNav = ref(false)

const mobileNavRef = ref(null)
const navbarBurgerRef = ref(null)

const authStore = useAuthStore()

const logoutUser = () => {
  authStore.logoutUser()
  router.push({ name: 'auth' })
}

const router = useRouter()

// VUE USE - ClickOutside to close
onClickOutside(
  mobileNavRef,
  () => {
    showMobileNav.value = false
  },
  {
    ignore: [navbarBurgerRef],
  }
)
</script>

<style>
@media (max-width: 1023px) {
  .navbar-menu {
    position: absolute;
    left: 0;
    width: 100%;
  }
}
</style>
