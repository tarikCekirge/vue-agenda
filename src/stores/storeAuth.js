import { defineStore } from 'pinia'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from '@/js/firebase'
import { useStoreNotes } from '@/stores/storeNotes'


export const useStoreAuth = defineStore('storeAuth', {
    state: () => {
        return {
            errorMessage: '',
            user: {}
        }
    },
    actions: {
        init() {
            const storeNotes = useStoreNotes()
            onAuthStateChanged(auth, (user) => {
                if (user) {
                    console.log('User logged in:', user)
                    this.user.id = user.uid,
                        this.user.email = user.email
                    const uid = user.uid;
                    this.router.push('/')
                    storeNotes.init()
                    // ...
                } else {
                    this.user = {};
                    this.router.replace('/auth');
                    storeNotes.notes.clearNotes()

                }
            });
        },
        registerUser(credentials) {
            const { email, password } = credentials
            createUserWithEmailAndPassword(auth, email, password).then((userCredential) => {
                const user = userCredential.user;
                this.$state.errorMessage = null;
            }).catch((error) => {
                const errorCode = error.code
                this.$state.errorMessage = error.message
            });
        },

        loginUser(credentials) {
            const { email, password } = credentials
            signInWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;
                    this.$state.errorMessage = null;
                })
                .catch((error) => {
                    const errorCode = error.code;
                    this.$state.errorMessage = error.message
                });
        },
        logoutUser() {
            signOut(auth).then(() => {
                console.log(' Sign-out successful.')
            }).catch((error) => {
                console.log('An error happened.')
            });
        },
    },
    getters: {
        getErrorMessage() {
            return this.$state.errorMessage;
        }
    }

})