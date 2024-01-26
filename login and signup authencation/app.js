function signup() {
    let username = document.getElementById("username")
    let password = document.getElementById("userpassword")
    let email = document.getElementById("email")
    let userObj = {
        name: username.value,
        password: userpassword.value,
        email:email.value
       
    }
    let getUsers = localStorage.getItem("users")
    console.log(getUsers);
    if (!username.value&&!email.value) {
        alert("missing username or password")
    }
    else{
    if (getUsers == null) {
        localStorage.setItem("users", JSON.stringify([userObj]))
        alert("user successfully signup")
        location.assign("./login.html")
    }
    else {
        let userParse = JSON.parse(getUsers)
        console.log(userParse)
        let emailCheck = userParse.find(function (value, index) {
            console.log("value", value, "index", index);
            if (value.email === email.value) {
                return true
                
            }
        })
        if (emailCheck === undefined) {
            userParse.push(userObj)
            localStorage.setItem("users", JSON.stringify(userParse))
            alert("user successfully signup")
            location.assign("./login.html")
        }
        else {
            alert("your email is already exist")
        }
    }
}
}
function login() {
    let username = document.getElementById("username")
    let password = document.getElementById("password")
    
}
