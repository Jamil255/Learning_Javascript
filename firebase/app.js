
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";

import { getFirestore, collection, addDoc,getDocs,deleteDoc,doc } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBPrDQjnaOctapDTo6WUXYmlRbv_LIkVwI",
    authDomain: "todolist-dd678.firebaseapp.com",
    projectId: "todolist-dd678",
    storageBucket: "todolist-dd678.appspot.com",
    messagingSenderId: "33567561355",
    appId: "1:33567561355:web:a2dba4c4c2eaa53dad268e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Your web app's Firebase configuration

const db = getFirestore(app);

// console.log(app, "jamil", db)
//add data//
let ul=document.getElementById("ul")
let addTAsk= document.getElementById("addTAsk").addEventListener("click",addData)
async function addData() {
    let inp = document.getElementById("inp")
    if (inp.value.length < 1) {
        alert("Missing input field")
        return
    }
    let userObj = {
        todo: inp.value
    }
    let docRef = await addDoc(collection(db, "students"), userObj)
    // console.log(docRef)
    let getUi =`<li>${inp.value}</li><button class="edit-btn">Edit</button>
    <button class="delete-btn">Delete</button>`
    ul.innerHTML += getUi
    inp.value=""

}
// get data 
window.addEventListener("load", loadPage)

async function loadPage() {
    ul.innerHTML=""
    let tempArr = []
    const querysanpshot = await getDocs(collection(db, "students"))
    querysanpshot.forEach(function (doc) {
        tempArr.push({
            id: doc.id,
            todoValue:doc.data().todo
        })
        for (let i = 0; i < tempArr.length; i++) {
            ul.innerHTML+=`<li>${tempArr[i].todoValue}</li><button class="edit-btn">Edit</button>
            <button onclick="delTodo(this)" id="${tempArr[i].id}" class="delete-btn" >Delete</button>`
        }
        
    })

}
// delete data
async function delTodo(ele) {
    // console.log(ele);
    let docID = ele.id
 let del=   await deleteDoc(doc(db, "todo", docID))
    loadPage()
}




window.delTodo =delTodo