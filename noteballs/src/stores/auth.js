import { defineStore } from 'pinia'
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth'
import { auth } from '@/utils/functions/firebase'

export const useAuthStore = defineStore('authStore', {
  state: () => {
    return {
      user: {},
    }
  },

  actions: {
    initAuth() {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          this.user.id = user.uid
          this.user.email = user.email
          this.router.push({ name: 'notes' })
        } else {
          this.user = {}
          this.router.replace({ name: 'auth' })
        }
      })
    },
    async registerUser(credentials) {
      try {
        const newUser = await createUserWithEmailAndPassword(
          auth,
          credentials.email,
          credentials.password
        )
        if (newUser) this.router.push({ name: 'notes' })
      } catch (error) {
        const errorCode = error.code
        const errorMessage = error.message
        console.log(errorCode, errorMessage)
      }
    },
    async loginUser(credentials) {
      try {
        await signInWithEmailAndPassword(auth, credentials.email, credentials.password)
      } catch (error) {
        const errorCode = error.code
        const errorMessage = error.message
        console.log(errorCode, errorMessage)
      }
    },
    async logoutUser() {
      try {
        await signOut(auth)
      } catch (error) {
        const errorCode = error.code
        const errorMessage = error.message
        console.log(errorCode, errorMessage)
      }
    },
  },
})
