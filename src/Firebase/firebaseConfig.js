import { initializeApp } from "firebase/app";
import { FacebookAuthProvider, getAuth, GoogleAuthProvider } from "firebase/auth";
import {getFirestore} from "firebase/firestore"


const firebaseConfig = {
    apiKey: "AIzaSyAyUKtfeGVh9lUhbbDZzjaPnzp9_lwtPBk",
    authDomain: "bulletin-fe44c.firebaseapp.com",
    projectId: "bulletin-fe44c",
    storageBucket: "bulletin-fe44c.appspot.com",
    messagingSenderId: "124559177485",
    appId: "1:124559177485:web:a10db1ab700acc8b78a244"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const google = new GoogleAuthProvider()
export const facebook = new FacebookAuthProvider()
export const database = getFirestore()
export const auth = getAuth(app)

export default app