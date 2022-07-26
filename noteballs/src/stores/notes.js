import { defineStore } from 'pinia'

export const useNotesStore = defineStore('notes', {
  state: () => {
    return {
      notes: [
        {
          id: '1658784325615',
          content:
            'This is the first fake note of the App. Just a short note for displaying in the DOM.',
        },
        {
          id: '1658784321611',
          content:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae obcaecati quaerat mollitia eos repellat consequatur doloremque ad! Dolorem, reiciendis asperiores, tenetur corporis cum ipsa eveniet non reprehenderit accusantium ipsum dignissimos.',
        },
        {
          id: '1658784318610',
          content: 'This is another fake note. Added while doing the Course',
        },
      ],
    }
  },

  actions: {
    addNote(content) {
      const currentDate = new Date().getTime()
      const note = {
        id: currentDate.toString(),
        content,
      }

      this.notes.unshift(note)
    },

    deleteNote(id) {
      this.notes = this.notes.filter((note) => note.id !== id)
    },

    editNote({ id, content }) {
      const noteToEdit = {
        id,
        content,
      }
      this.notes = this.notes.map((note) => (note.id === noteToEdit.id ? noteToEdit : note))
    },
    // Danny's version - Not considering immutability
    // editNote({ id, content }) {
    //   const index = this.notes.findIndex(note => note.id === id)
    //   this.notes[index].content = content
    // },
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
      state.notes.reduce((acc, note) => {
        return acc + note.content.length
      }, 0),
  },
})
