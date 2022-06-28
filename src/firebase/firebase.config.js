import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyAyUKtfeGVh9lUhbbDZzjaPnzp9_lwtPBk",
  authDomain: "bulletin-fe44c.firebaseapp.com",
  projectId: "bulletin-fe44c",
  storageBucket: "bulletin-fe44c.appspot.com",
  messagingSenderId: "124559177485",
  appId: "1:124559177485:web:a10db1ab700acc8b78a244",
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore();
