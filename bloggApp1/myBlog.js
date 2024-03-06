import { getDocs, collection, db, deleteDoc, doc, updateDoc } from './firebase.js'
let parent = document.getElementById('parent')

let exampleModal = document.getElementById('exampleModal')
var myModal = new bootstrap.Modal(document.getElementById('exampleModal'), {
    keyboard: false,
})
window.addEventListener('load', async function pageLoad() {
    let uid = localStorage.getItem('uid')
    console.log(uid)
    if (!uid) {
        window.location.assign('./index.html')
        return
    }
    let blogArr = []
    const querySanpshot = await getDocs(collection(db, 'blogs'))
    querySanpshot.forEach((doc) => {
        console.log(doc.data().title)
        let data = doc.data()
        blogArr.push({
            title: data.title,
            desc: data.desc,
            image: data.image,
            blogId: doc.id,
            isPrivate: data.isPrivate,
        })
    })

    for (const value of blogArr) {
        parent.innerHTML += renderCardUI(
            value.title,
            value.desc,
            '',
            value.blogId,
            value.isPrivate
        )
    }
})

function renderCardUI(title, desc, image, id, isPrivate) {
    console.log('UI isPrivate', isPrivate)

    var lockValue = ''
    if (isPrivate) {
        lockValue = `<i class="fa-solid fa-lock"></i>`
    } else {
        lockValue = ''
    }

    var UI = `<div class="card" id="cardsUi" style="width: 18rem">
      <img
        src="https://picsum.photos/300/200"
        class="card-img-top"
        alt="..."
      />
      <div class="card-body">
        <h5 class="card-title"> ${title} ${lockValue}  </h5>
        <p class="card-text">
          ${desc}
        </p>
  
        <button class="btn btn-danger" id=${id}  onclick="deleteBlog(this)" >DELETE</button>
        <button class="btn btn-info"  id=${id} onclick="editBlog(this)" >EDIT</button>
        </div>
    </div>`

    return UI
}



const deleteBlog = async (ele) => {
    let blogId = ele.id;
    await deleteDoc(doc(db, "blogs", blogId));
    let cardsUi = document.getElementById("cardsUi")
    cardsUi.remove()

}

const logoutFunction = () => {
    localStorage.clear()
    window.location.assign("./index.html")
}



async function editBlog(ele) {
    myModal.show()
    let blogId = ele.id
    console.log(blogId)
    let title = document.getElementById('title')
    let desc = document.getElementById('desc')
    title.value = ele.parentNode.firstElementChild.innerHTML
    desc.value = ele.parentNode.firstElementChild.nextElementSibling.innerHTML
    //   updateValue(blogId)
    btnUpdate.addEventListener('click', valueUpdate)
    async function valueUpdate() {
        let blogId = ele.id
        const washingtonRef = doc(db, 'blogs', blogId)

        await updateDoc(washingtonRef, {
            title: title.value,
            desc: desc.value,
        })
        myModal.hide()
    }
}




window.editBlog = editBlog
window.deleteBlog = deleteBlog
window.logoutFunction = logoutFunction
