// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore, collection, addDoc, getDocs, deleteDoc, doc, updateDoc } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDB2W4jido-CmA-m2uQLcxLgDwq-sOKPQk",
    authDomain: "myapp-769b8.firebaseapp.com",
    projectId: "myapp-769b8",
    storageBucket: "myapp-769b8.appspot.com",
    messagingSenderId: "741412450605",
    appId: "1:741412450605:web:d8c0aed23feca9e448e3a4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
var db = getFirestore(app)
let ul = document.getElementById("ul")

let addNote = document.getElementById("addNote").addEventListener("click", addNoteFn)
async function addNoteFn() {
    let inp = document.getElementById("inp")
    if (inp.value.length < 1) {
        alert("Missing input value")
        return
    }
    let todobj = {
        todo: inp.value
    }
    let docRef = await addDoc(collection(db, "todos"), todobj)
    // console.log(docRef.id);
    let getUL = createUi(inp.value, docRef.id)
    ul.innerHTML += getUL
    inp.value = ""
}
window.addEventListener("load", pageLoad)
async function pageLoad() {
    ul.innerHTML = ""
    let tempArr = [];
    const querysanpshot = await getDocs(collection(db, "todos"))
    querysanpshot.forEach(function (doc) {
        console.log(doc.data());
        tempArr.push({
            inpValue: doc.data().todo,
            id: doc.id
        })
    })
    for (let i = 0; i < tempArr.length; i++) {
        let getUL = createUi(tempArr[i].inpValue, tempArr[i].id)
        ul.innerHTML += getUL;
    }
}
async function delTodo(ele) {
    let docID = ele.id;
    await deleteDoc(doc(db, "todos", docID)); // Corrected collection name to "todos"
    pageLoad();
}


window.delTodo = delTodo;

async function editTodo(ele) {
    let docID = ele.id;
    let newText = prompt("Enter new text:", ele.parentNode.firstElementChild.innerHTML);
    if (!newText) {
        alert("Please enter a text")
        return
    }

    const washingtonRef = doc(db, "todos", docID); // Remove quotes around docID
    await updateDoc(washingtonRef, {
        todo: newText
    });

    pageLoad();

}
window.editTodo = editTodo
function createUi(inpValue, id) {
    let ui = ` <li>${inpValue}</li>
    <button  id='${id}' class= "edit-btn" onclick="editTodo(this)">Edit</button>
    <button id='${id}' class= "delete-btn" onclick="delTodo(this)">Delete</button>`
    return ui;
}