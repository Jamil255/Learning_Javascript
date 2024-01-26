//Events in js
//used to call the functions
// function foo() {
//     document.write("hello world.................!")
// }

// function outer() {
//     consule.log("oute 1")
//     function inner() {
//         consule.log("inner 2")
//     }
//     inner()
//     function inner() {
//         consule.log("inner 2")
//     }
//     inner()
//     inner()
//     inner()
// }
// outer()

// // local and gobal
// let i=12

// function add(a, b) {
//     let i= 40
//     let j = 12
//     consule.log(i + j)
// }
// add()

// consule.log(i)

// function userDisplay() {
//     let inp = document.getElementById("inp")
//     inp.value = "jamil"

// function getFormValue() {
//     let inp = document.getElementById("inp")
//     let name = inp.setAttribute('class', 'form')
//     let idValue = inp.setAttribute('value', 'jamil')
//     let getValue= inp.getAttribute('class')
//     consule.log(getValue)

// }
// function foo() {
//     let a = document.getElementById("inp").value
//     let b =a.getAttribute("inp")
//     consule.log(b)
// }

// function foo() {
//     let a = document.getElementById("inp")
//     let c = a.hasAttribute('class')
//     consule.log(c)
// }

// function foo() {
//     let a = document.getElementById("inp")
//     let b=a.setAttribute("value","jamil")
// }
// var getul = document.getElementsById("getul");
// function foo(){
//     let a = document.getElementById("inp").value
//     let li = document.createElement("li")
//     let litext = document.createTextNode(a)
//     li.appendChild(litext)
//     getul.appendChild(li)

// }

let getul = document.getElementById('ul')
function add() {
  let a = document.getElementById('inp')
  let li = document.createElement('li')
  let liText = document.createTextNode(a.value)
  li.appendChild(liText)
  getul.appendChild(li)
  a.value = ''
  let deletbtn = document.createElement('button')
  let deletBtnText = document.createTextNode('Delete')
  deletbtn.appendChild(deletBtnText)
  li.appendChild(deletbtn)
    deletbtn.setAttribute("onclick", "del(this)")
    let editBtn = document.createElement("button")
    let editBtnText = document.createTextNode("Edit")
    editBtn.appendChild(editBtnText)
    li.appendChild(editBtn)
    deletbtn.setAttribute("onclick","editfun(this)")
}

function DeleteAll() {
  getul.innerHTML = ''
}

function del(e){
    e.parentNode.remove();
}
function editfun(e) {
    let a = prompt("Enter Edit value", e.parentNode.firstChild.nodeValue)
    e.parentNode.firstChild.nodeValue=a
}
