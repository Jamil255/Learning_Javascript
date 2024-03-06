// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js'

import { addDoc, collection, doc, getFirestore, getDocs, deleteDoc, updateDoc, } from 'https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js'


// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCzK8WqhOnZF4kkSSmuG3EcOJKqwySpbQA",
    authDomain: "bloggapp1-3c5d8.firebaseapp.com",
    projectId: "bloggapp1-3c5d8",
    storageBucket: "bloggapp1-3c5d8.appspot.com",
    messagingSenderId: "961107930208",
    appId: "1:961107930208:web:eda1bbf9aa8798507fa705"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app)
export {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    app,
    auth,
    getAuth,
    db,
    addDoc,
    collection,
    getFirestore,
    getDocs,
    deleteDoc,
    doc,
    updateDoc,

}
