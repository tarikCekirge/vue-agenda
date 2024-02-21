import { defineStore } from 'pinia'
import { db } from '@/js/firebase'
import { collection, onSnapshot, doc, setDoc, deleteDoc, updateDoc, query, orderBy, addDoc } from 'firebase/firestore';
import { useStoreAuth } from '@/stores/storeAuth';

let notesCollectionRef
let notesCollectionQuery

export const useStoreNotes = defineStore('storeNotes', {
    state: () => {
        return {
            notes: [
                // { id: 'id1', content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor praesentium cumque ipsa nihil, deserunt illum similique! A fuga officiis esse rerum accusamus architecto nulla libero, in sunt deleniti doloremque ex?' },
                // { id: 'id2', content: 'Kısa Not 2' },
                // { id: 'id3', content: 'Kısa Not 3' },
            ],
            notesLoaded: false
        }
    },
    actions: {
        init() {
            const storeAuth = useStoreAuth();
            console.log('storeAuth', storeAuth)
            notesCollectionRef = collection(db, 'users', storeAuth.user.id, 'notes');
            notesCollectionQuery = query(notesCollectionRef, orderBy('date', 'desc'));
            this.getNotes()
        },
        async getNotes() {
            this.notesLoaded = true;
            onSnapshot(notesCollectionQuery, (querySnapshot) => {
                let notes = []
                querySnapshot.forEach((doc) => {
                    let note = {
                        id: doc.id,
                        content: doc.data().content,
                        date: doc.data().date,
                    }
                    notes.push(note)
                })

                this.notes = notes
                this.notesLoaded = false;
            });
        },
        async addNote(newNoteContent) {
            let currentDate = new Date().getTime();
            let date = currentDate.toString();

            await addDoc(notesCollectionRef, {
                content: newNoteContent.value,
                date
            });

        },
        async deleteNote(idToDelete) {
            await deleteDoc(doc(notesCollectionRef, idToDelete));
        },
        async updateNote(id, content) {
            await updateDoc(doc(notesCollectionRef, id), {
                content: content
            });
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