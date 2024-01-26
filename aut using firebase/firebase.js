  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
import {getAuth,createUserWithEmailAndPassword ,signInWithEmailAndPassword  } from 'https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js'
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyAGYURVKlPAjfA5vXGYGCL3fV7u7MK_j4Y",
    authDomain: "auth-4d9df.firebaseapp.com",
    projectId: "auth-4d9df",
    storageBucket: "auth-4d9df.appspot.com",
    messagingSenderId: "907980201919",
    appId: "1:907980201919:web:5663b1f8e8da48ffd90b0a"
  };

  // Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = firebase.auth();
