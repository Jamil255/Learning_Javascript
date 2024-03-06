import { addDoc, collection, db, getDocs } from './firebase.js'

let parent = document.getElementById('parent')
let exampleModal = document.getElementById('exampleModal')
let myModal = new bootstrap.Modal(document.getElementById('exampleModal'), {
  keyboard: false,
})
window.addEventListener('load', async () => {
  let getData = localStorage.getItem('uid')
  console.log(getData)
  if (!getData) {
    location.replace('./index.html')
    return
  }
  let blogArr = []
  const querySnapshot = await getDocs(collection(db, 'blogs'))
  querySnapshot.forEach((doc) => {
    let data = doc.data()
    blogArr.push({
      title: data.title,
      desc: data.desc,
      uid: data.uid,
      image: data.image,
      blogId: doc.id,
      isPrivate: data.isPrivate,
    })
  })
  for (let value of blogArr) {
    parent.innerHTML += renderUi(
      value.title,
      value.desc,
      value.image,
      value.blogId,
      value.isPrivate
    )
  }
})

const createBlog = async () => {
  let title = document.getElementById('title')
  let desc = document.getElementById('desc')
  let privatePost = document.getElementById('privatePost').checked
  console.log(privatePost)
  let uid = localStorage.getItem('uid')
  if (!title.value && !desc.value) {
    alert('Please enter value')
    return
  }

  let blogObj = {
    title: title.value,
    desc: desc.value,
    uid: uid,
    image: '',
    isPrivate: privatePost,
  }
  try {
    const docRef = await addDoc(collection(db, 'blogs'), blogObj)
    parent.innerHTML += renderUi(
      title.value,
      desc.value,
      '',
      docRef.id,
      privatePost
    )
  } catch (e) {
    console.error('Error adding document: ', e)
  }

  myModal.hide()
  title.value = ''
  desc.value = ''
}

const renderUi = (title, desc, image, id, isPrivate) => {
  let lockValue = ''
  if (isPrivate) {
    lockValue = `<i class="fa-solid fa-lock"></i>`
  } else {
    lockValue = ''
  }

  let UI = `<div class="card " style="width: 18rem">
        <img
          src="https://picsum.photos/200/200"
          class="card-img-top"
          alt="..."
        />
        <div class="card-body" >
          <h5 class="card-title"> ${title} ${lockValue}  </h5>
          <p class="card-text">
            ${desc}
          </p>
         
        </div>
      </div>`

  return UI
}

const logoutFun = () => {
    localStorage.clear()
    window.location.assign("./index.html")
}
window.createBlog = createBlog
window.logoutFun=logoutFun