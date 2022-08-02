import { defineStore } from 'pinia'
import { useNow, useDateFormat } from '@vueuse/core'

import {
  collection,
  doc,
  addDoc,
  setDoc,
  deleteDoc,
  updateDoc,
  query,
  orderBy,
  limit,
  where,
  onSnapshot,
} from 'firebase/firestore'
import { db } from '../utils/functions/firebase'

const notesCollectionRef = collection(db, 'notes')
const notesCollectionQuery = query(notesCollectionRef, orderBy('ts', 'desc'))
// const notesCollectionQuery = query(notesCollectionRef, orderBy('id', 'desc'), limit(2))

export const useNotesStore = defineStore('notes', {
  state: () => {
    return {
      notes: [],
    }
  },

  actions: {
    async getNotes() {
      // This commented code is related to Read Data Once in Firestore, no realtime updates
      // const querySnapshot = await getDocs(collection(db, 'notes'))
      // querySnapshot.forEach((doc) => {
      //   // doc.data() is never undefined for query doc snapshots
      //   // console.log(doc.id, ' => ', doc.data())
      //   const note = {
      //     id: doc.id,
      //     content: doc.data().content,
      //   }
      //   this.notes.push(note)
      // })

      const unsubscribe = onSnapshot(notesCollectionQuery, (querySnapshot) => {
        const notes = []
        querySnapshot.forEach((doc) => {
          const note = {
            id: doc.id,
            content: doc.data().content,
            ts: doc.data().ts,
          }
          notes.push(note)
        })

        this.notes = notes
      })

      // onSnapshot will keep listening for changes while the app is running
      // If there was a need to stop this, it could just use the method below
      // unsubscribe()
    },

    async addNote(content) {
      const currentDate = new Date().getTime(),
        ts = currentDate.toString()

      await addDoc(notesCollectionRef, {
        content,
        ts,
      })

      // used when adding my own ID
      // await setDoc(doc(notesCollectionRef, id), {
      //   content: content,
      //   ts,
      // })
    },

    async deleteNote(id) {
      await deleteDoc(doc(notesCollectionRef, id))
    },

    async editNote({ id, content }) {
      const noteRef = doc(notesCollectionRef, id)
      const currentDate = new Date().getTime(),
        ts = currentDate.toString()
      // Added ts to be updated when the note is updated

      // Set the "content" field of the note 'id'
      await updateDoc(noteRef, {
        content,
        ts,
      })
    },
  },

  getters: {
    getNote: (state) => (id) => {
      return state.notes.find((note) => note.id === id)
    },
    getNoteCount: (state) => state.notes.length,

    getNotesCharactersCount: (state) =>
      state.notes.reduce((acc, note) => acc + note.content.length, 0),

    getNoteDate: (state) => (id) => {
      const note = state.notes.find((note) => note.id === id)
      const date = new Date(parseInt(note.ts))
      return useDateFormat(date, 'DD/MM/YYYY - HH:mm')
    },
  },
})
