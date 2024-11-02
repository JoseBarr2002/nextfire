// Import the functions you need from the SDKs you need
// src/lib/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAV2ntXojpdtcGLcalhYyBycZFR3UL-aok",
    authDomain: "nextfire-507dd.firebaseapp.com",
    projectId: "nextfire-507dd",
    storageBucket: "nextfire-507dd.appspot.com",
    messagingSenderId: "285530855558",
    appId: "1:285530855558:web:d4ae5db227a190ed5a5907",
    measurementId: "G-NPH4HKC9KD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//Initialize Services
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export const googleAuthProvider = new GoogleAuthProvider();
export { signInWithPopup, signOut };