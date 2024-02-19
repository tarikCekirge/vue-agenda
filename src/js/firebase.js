
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyC025zs_Bpv20__Oekrw0OIXibhsJ6YYec",
    authDomain: "agenda-12808.firebaseapp.com",
    projectId: "agenda-12808",
    storageBucket: "agenda-12808.appspot.com",
    messagingSenderId: "713357800656",
    appId: "1:713357800656:web:1a12d96886eecd25ac9ad5"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {
    db
}