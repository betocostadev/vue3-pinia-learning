import { defineStore } from 'pinia'
import { createUserWithEmailAndPassword, signOut } from 'firebase/auth'
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
