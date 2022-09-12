import { defineStore } from 'pinia'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth'
// import { useDateFormat } from '@vueuse/core'

import { collection, query } from 'firebase/firestore'
import { db, auth } from '@/utils/functions/firebase'

export const useAuthStore = defineStore('authStore', {
  state: () => {
    return {}
  },

  actions: {
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
