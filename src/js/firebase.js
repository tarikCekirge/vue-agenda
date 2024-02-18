import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
    apiKey: "AIzaSyCEWsr4OGxV3_AlPIwDsL42zewNZQtc9uE",
    authDomain: "agenda-242c6.firebaseapp.com",
    projectId: "agenda-242c6",
    storageBucket: "agenda-242c6.appspot.com",
    messagingSenderId: "227541766210",
    appId: "1:227541766210:web:495dd39772e1f77a755ddb"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {
    db
}