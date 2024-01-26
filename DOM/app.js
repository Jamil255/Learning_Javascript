// let a = document
// console.log(a.childNodes)

// console.log(Math.floor(Math.random()*7))

// console.log(document.documentElement)
// console.log(document.body.childNodes)
// console.log(document.body.children)
// console.log(document.head)
// let getul = document.getElementById('ul')

// function foo() {
//   let inp = document.getElementById('inp')
//   let li = document.createElement('li')
//   let liText = document.createTextNode(inp.value)
//   li.appendChild(liText)
//   ul.appendChild(li)
//   inp.value = ' '
//   let deleteBtn = document.createElement('button')
//   let deleteBtnText = document.createTextNode('Delete')
//   deleteBtn.appendChild(deleteBtnText)
//   li.appendChild(deleteBtn)
//   let editBtn = document.createElement('button')
//   let editBtnText = document.createTextNode('Edit')
//   editBtn.appendChild(editBtnText)
//   li.appendChild(editBtn)
//   deleteBtn.setAttribute('onclick', 'deleteBtnClick(this)')
//   editBtn.setAttribute('onclick', 'editBtnClick(this)')
// }

// function del() {
//   getul.innerHTML = ' '
// }
// function deleteBtnClick(e) {
// e.parentNode.remove()
// }
// function editBtnClick(e) {
//     let a = prompt("Enter edit value", e.parentNode.firstChild.nodeValue)
//     e.parentNode.firstChild.nodeValue=a

// }
let getul = document.getElementById('ul')

function foo() {
  let inp = document.getElementById('inp')
  let li = document.createElement('li')
  liText = document.createTextNode(inp.value)
  li.append(liText)
  getul.appendChild(li)
  inp.value = ''
  let deleteBtn = document.createElement('button')
  let deleteBtnText = document.createTextNode('Delete')
  deleteBtn.appendChild(deleteBtnText)
  li.appendChild(deleteBtn)
  let editBtn = document.createElement('button')
  let editBtnText = document.createTextNode('edit')
  editBtn.appendChild(editBtnText)
  li.appendChild(editBtn)
  deleteBtn.setAttribute('onclick', 'deleteBtnClick(this)')
  editBtn.setAttribute('onclick', 'editBtnClick(this)')
}
function del() {
  getul.innerHTML = ''
}
function deleteBtnClick(e) {
  let a = e.parentNode.remove()
}
function editBtnClick(e) {
  let a = prompt('Enter your edit value', e.parentNode.firstChild.nodeValue)
  e.parentNode.firstChild.nodeValue = a
}


