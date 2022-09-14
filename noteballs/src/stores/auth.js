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
        } else {
          this.user = {}
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
        console.log(newUser)
      } catch (error) {
        const errorCode = error.code
        const errorMessage = error.message
        console.log(errorCode, errorMessage)
      }
    },
    async loginUser(credentials) {
      console.log('logging in')
      try {
        const userCredentials = await signInWithEmailAndPassword(
          auth,
          credentials.email,
          credentials.password
        )

        return userCredentials.user ? userCredentials.user : undefined
      } catch (error) {
        const errorCode = error.code
        const errorMessage = error.message
        console.log(errorCode, errorMessage)
      }
    },
    async logoutUser() {
      try {
        await signOut(auth)
        console.log('after sign out', auth)
      } catch (error) {
        const errorCode = error.code
        const errorMessage = error.message
        console.log(errorCode, errorMessage)
      }
    },
  },
})
