import { defineStore } from 'pinia'
// import { useDateFormat } from '@vueuse/core'

import { collection, query } from 'firebase/firestore'
import { db } from '@/stores/auth'

export const useAuthStore = defineStore('authStore', {
  state: () => {
    return {}
  },

  actions: {},
})
