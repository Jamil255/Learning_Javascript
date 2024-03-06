import {
  createUserWithEmailAndPassword,
  auth,
  getAuth,
  signInWithEmailAndPassword,
} from './firebase.js'

function signUpFun() {
  let email = document.getElementById('email')
  let password = document.getElementById('password')
  createUserWithEmailAndPassword(auth, email.value, password.value)
    .then((reslove) => {
      alert('user successfully signup')
      console.log(reslove.user.uid)
      location.replace('./index.html')
    })
    .catch((error) => {
      const errorCode = error.code
      const errorMessage = error.message
      alert(errorMessage)
    })
}

function loginFun() {
  let email = document.getElementById('email')
  let password = document.getElementById('password')
  signInWithEmailAndPassword(auth, email.value, password.value)
    .then((reslove) => {
        localStorage.setItem('uid', JSON.stringify(reslove.user.uid))
        alert("user successfully login")
      location.href = './dashboard.html'
    })
    .catch((error) => {
        const errorCode = error.code
        console.log("Error: " + error.message);
      alert(errorCode)
    })
}

window.addEventListener('load', () => {
  let uid = localStorage.getItem('uid')
  console.log(uid)
  if (uid) {
    window.location.assign('./dashboard.html')
  }
})

window.signUpFun = signUpFun
window.loginFun = loginFun
