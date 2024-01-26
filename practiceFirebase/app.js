 // Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
 // TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore,} from 'https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js'

 // Your web app's Firebase configuration
 const firebaseConfig = {
   apiKey: "AIzaSyAjlwWkvvcxnhVhtZP79aZV1_9aDJKm5mA",
   authDomain: "todolistapp-37de2.firebaseapp.com",
   projectId: "todolistapp-37de2",
   storageBucket: "todolistapp-37de2.appspot.com",
   messagingSenderId: "793791995866",
   appId: "1:793791995866:web:46f3cdf8f8855a46636ae3"
 };

 // Initialize Firebase
const app = initializeApp(firebaseConfig)
const db = getFirestore(app)
console.log(db);