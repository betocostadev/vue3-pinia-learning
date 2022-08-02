import { defineStore } from 'pinia'
// Comented FB code is for Read Data Once only
// import { collection, getDocs } from 'firebase/firestore'
import {
  collection,
  doc,
  setDoc,
  deleteDoc,
  updateDoc,
  query,
  where,
  onSnapshot,
} from 'firebase/firestore'
import { db } from '../utils/functions/firebase'

const notesCollectionRef = collection(db, 'notes')

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

      const unsubscribe = onSnapshot(notesCollectionRef, (querySnapshot) => {
        const notes = []
        querySnapshot.forEach((doc) => {
          const note = {
            id: doc.id,
            content: doc.data().content,
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
        id = currentDate.toString()

      await setDoc(doc(notesCollectionRef, id), {
        content: content,
      })
    },

    async deleteNote(id) {
      await deleteDoc(doc(notesCollectionRef, id))
    },

    async editNote({ id, content }) {
      const noteRef = doc(notesCollectionRef, id)

      // Set the "content" field of the note 'id'
      await updateDoc(noteRef, {
        content,
      })
    },
  },

  getters: {
    getNote: (state) => (id) => {
      return state.notes.find((note) => note.id === id)
    },
    // Danny's version
    // getNoteContent: (state) => {
    //   return (id) => {
    //     state.notes.filter((note) => note.id === id)[0].content
    //   }
    // },
    getNoteCount: (state) => state.notes.length,

    getNotesCharactersCount: (state) =>
      state.notes.reduce((acc, note) => acc + note.content.length, 0),
  },
})
