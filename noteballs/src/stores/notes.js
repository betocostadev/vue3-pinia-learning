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
  },

  getters: {
    getNoteContent: (state) => (id) => {
      return state.notes.find((note) => note.id === id).content
    },
    // Danny's version
    // getNoteContent: (state) => {
    //   return (id) => {
    //     state.notes.filter((note) => note.id === id)[0].content
    //   }
    // },
  },
})
