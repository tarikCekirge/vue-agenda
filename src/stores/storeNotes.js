import { defineStore } from 'pinia'

export const useStoreNotes = defineStore('storeNotes', {
    state: () => {
        return {
            notes: [
                { id: "id1", content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor praesentium cumque ipsa nihil, deserunt illum similique! A fuga officiis esse rerum accusamus architecto nulla libero, in sunt deleniti doloremque ex?" },
                { id: "id2", content: "Kısa Not 2" },
                { id: "id3", content: "Kısa Not 3" },
            ]
        }
    },
    actions: {
        addNote(newNoteContent) {
            let currentDate = new Date().getTime();
            let id = currentDate.toString();
            let note = {
                id,
                content: newNoteContent.value,
            };

            this.notes.unshift(note)
        },
        deleteNote(idToDelete) {
            this.notes = this.notes.filter((note) => {
                return note.id !== idToDelete;
            })
        },
        updateNote(id, content) {
            let index = this.notes.findIndex(note => note.id === id)
            this.notes[index].content = content
        }
    },
    getters: {
        getNoteContent: (state) => {
            return (id) => {
                return state.notes.filter(note => note.id === id)[0].content
            }
        },

        totalNotesCount: (state) => {
            return state.notes.length
        },
        totalCharactersCount: (state) => {
            let count = 0;
            state.notes.forEach(note => {
                count += note.content.length
            });

            return count;
        }
    }
})