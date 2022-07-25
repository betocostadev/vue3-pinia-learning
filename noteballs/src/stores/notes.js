import { defineStore } from 'pinia'

export const useNotesStore = defineStore('notes', {
  state: () => {
    return {
      notes: [
        {
          id: '1668272',
          content:
            'This is the first fake note of the App. Just a short note for displaying in the DOM.',
        },
        {
          id: '16678421',
          content:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae obcaecati quaerat mollitia eos repellat consequatur doloremque ad! Dolorem, reiciendis asperiores, tenetur corporis cum ipsa eveniet non reprehenderit accusantium ipsum dignissimos.',
        },
        {
          id: '16678533',
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
  },
})
