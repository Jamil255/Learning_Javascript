//     function seeMore() {
//         let para=document.getElementById("para")
//         let btn = document.getElementById("btn")
//         if (btn.innerHTML=="See More") {
//             para.innerHTML = "I'm sorry, but I don't have access to real-time news updates or the internet to provide you with the latest news. My knowledge is based on information available up to January 2022. If you have a specific topic or question related to a recent event or news story, please feel free to ask, and I'll do my best to provide information or context based on my training data."
//             btn.innerHTML = "Less More"
//         }
//         else {
//             para.innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, natus!"
//             btn.innerHTML = "See More"
//         }
// }



//     // // let getul=document.getElementById("ul")
// // function AddValue() {
// //     let inp = document.getElementById("inp")
// //     let li = document.createElement("li")
// //     let litaxt = document.createTextNode(inp.value)
// //     li.appendChild(litaxt)
// //     getul.appendChild(li)
// //     inp.value=""
// //     let deletebtn = document.createElement("button")
// //     let deletebtnText = document.createTextNode("Delete")
// //     deletebtn.appendChild(deletebtnText)
// //     li.appendChild(deletebtn)

// //     let editbtn = document.createElement("button")
// //     let editbtnText = document.createTextNode("Edit")
// //     editbtn.appendChild(editbtnText)
// //     li.appendChild(editbtn)
// //     deletebtn.setAttribute("onclick", "deletebtnClick(this)")
// //     editbtn.setAttribute("onclick", "editbtnClick(this)")
    
// // }



// // function deleteAll() {
// //     getul.innerHTML=" "
// // }

// // function deletebtnClick(e) {
// //      e.parentNode.remove()
// // }
// // function editbtnClick(e) {
// //     let a=prompt("Enter the Edit Value ",e.parentNode.firstChild.nodeValue)
// //     e.parentNode.firstChild.nodeValue =a
// // }

// //  let getul=document.getElementById("getul")
// // function AddValue() {
// //     let username = document.getElementById("username").value
// //     let li = document.createElement("li")
// //     let liText = document.createTextNode(username)
// //   li.appendChild(liText)


    
// // }
// // function seeMore() {
// //     let para=document.getElementById("para")
// //     let btn = document.getElementById("btn")
// //     if (btn.innerHTML=="See More") {
// //         para.innerHTML = "The HyperText Markup Language or HTML is the standard markup language for documents designed to be displayed in a web browser. It defines the meaning and structure of web content. It is often assisted by "
// //         btn.innerHTML = " less than"
// //     }
// //     else {
// //         para.innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, natus"
// //         btn.innerHTML = "See more"
// //     }
// // }




// // function foo() {
// //     var heading = document.getElementById("heading")
// //     heading.className = " black"
// //     heading.classList.add("black", "addmulti")
// //     console.log("foo()", heading.className)
// // }


// // function removeBlackCLass() {
// //     var heading = document.getElementById("heading")
// //     heading.className = "heading white"
// //     console.log(heading.classList)
// //     heading.classList.remove("black", "white")
// // }


// // switch statement


// // var age = 18    /// 18 // 25
// // // if (age === 18) {
// // //     console.log("ALLOW")
// // // } else {
// // //     console.log("NOT ALLOW")
// // // }
// // // case = > if
// // // default => else
// // switch (age) {
// //     case 30:
// //         console.log("ALLOW");
// //         break
// //     case 25:
// //         console.log("allow");
// //     default: console.log("NOT ALLOW");
// // }

// // var dayOfWk = "Mon"
// // if (dayOfWk === "Sat" || dayOfWk === "Sun") {
// //     alert("Whoopee!");
// // }
// // else if (dayOfWk === "Fri") {
// //     alert("TGIF!");
// // }
// // else {
// //     alert("kam pr ja bhai ")
// // }

// // switch (dayOfWk) {
// //     case "Sat":
// //         alert("Weekend!");
// //         break
// //     case "Sun":
// //         alert("Funday!");
// //         break
// //     case "Fri":
// //         alert("Jumme ki rat!");
// //         break
// //     default:
// //         alert("Kam pr ja");

// // }



// // for (var i = 0; i < 10; i++) {
// //     console.log(i)
// // }

// // var i = 1
// // while (i <= 10) {
// //     console.log(i)



// //     i++
// // }


// // var i = 1
// // while (i <= 10) {

// //     // block statments
// //     console.log(i)




// //     i++

// // }



// // var i = 1
// // do {

// //     console.log(i)


// //     i++


// // } while (false)


// // var i = 1
// // console.log(++i)

// // let n = 0;
// // let x = 0;

// // while (n < 3) {
// //   n++;
// //   x += n;
// // }

// // let a = prompt("Enter your number")
// // while (a<=29) {
// //     a++
// //     if (a==2) {
// //         console.log("Error")
// //     }

// //     else {
// //         console.log("12")
// //     }
// // }


// // function focusMood(e) {
// //     e.style.border = "2px solid red"
// // }
// // function blurMood(e) {
// //     e.style.border = "2px solid green"
// // }


// // function submitHandler() {
// //     var username = document.getElementById("username")
// //     var helperText = document.getElementById("helperText")

// //     if (username.value.length >= 3) {
// //         helperText.innerHTML = "successfully submit!"
// //         helperText.style.color = "green"
// //     } else if (username.value.length < 3 && username.value.length > 0) {
// //         helperText.innerHTML = "Invalid username!"
// //         helperText.style.color = "red"
// //     } else {
// //         helperText.innerHTML = "Required field are missing!"
// //         helperText.style.color = "red"
// //     }


// // }


// // function helpertext() {
// //     let inp = document.getElementById("inp")
// //     let text= document.getElementById("text")
// //     if (inp.value.length >= 3) {
// //         text.innerHTML = "Successfully submit"
// //         text.style.color="green"
        
// //     }
// //     else if (inp.value.length < 3 && inp.value.length > 0) {
// // //         text.innerHTML = "invalid  value"
// // //         text.style.color="red"
// // //     }
// // //     else {
// // //         text.innerHTML = "missing  input !"
// // //         text.style.color = "red"
// // //         inp.style.border = "1px solid red"
// // //     }
// // // }
// // function helpertext() {
// //     let inp= document.getElementById("inp")
// //     let text = document.getElementById("text")
// //     if (inp.value.length>= 3) {
// //         text.innerHTML = "successfully submitted"
// //         text.style.color = "green"
// //     }
// //     else if (inp.value.length < 3 && inp.value.length > 0) {
// //         text.innerHTML = "invalid username !"
// //         text.style.color = "red"
// //     }
// //     else {
// //         text.innerHTML = "Missing  username !"
// //         text.style.color = "red"
// //     }
        
// // }



// // // function focusMode(e) {
// // // e.style.border = "1px solid red";
// // // }


// // // let a = document.getElementsByTagName("p")
// // // console.log(a)

// // // let a = document.getElementById("div01")
// // // let b= a.getElementsByTagName("p")
// // // console.log(b)

// // // console.log(document.childNodes)

// // // let para = document.querySelector(".inp")
// // // console.log(para.innerHTML="i ")

// // //  function Person(fullName,age,gender){
// // //     this.fullName = fullName,
// // //     this.age = age,
// // //     this.gender = gender
// // // }
// // // const person1 = new Person("jamil afzal", "19", "male")
// // // console.log(person1.gender)


// // function Students( fullName, id, gender,email) {
// //     this.fullName =fullName
// //     this.id = id
// //     this.gender = gender
// //     this.email = email
// // }

// // const student1 = new Students("jamil afzal", 19, "male", "jamilafzal255@gmail.com")
// // console.log(student1.id)

// // // constructor function

// // function Cars(model,color,name){
// // this.model= model,
// // this.color= color,
// // this.name= name
// // }

// // const car1 = new Cars(2020, "black", "pmw")
// // const car2 = new Cars(2020, "green", "pmw")
// // const car3 = new Cars(2020, "white", "pmw")
// // console.log(car1, car2,car3)

// let student = {
//     fullName: "jamil afzal",
//     id: 12,
//     email:"admin@"
// }
// console.log("fullName" in student);


function seeMore(ele) {
    let para = document.getElementById("para")
    let btn = document.getElementById("btn")
    if (btn.innerHTML=="See More") {
        para.innerHTML=`Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis eos illo rerum suscipit tempore provident labore natus? Recusandae sint voluptatibus ad tempora beatae illo culpa labore molestiae? Et, distinctio ducimus.
        Voluptates, ab dolores! Inventore, excepturi fuga culpa animi cum natus, nisi recusandae, deleniti neque illo expedita! Sint, error facilis dicta voluptate voluptatem dolore repellendus porro necessitatibus est sapiente nesciunt eaque.
        Veritatis maxime, quisquam deleniti fugit facere doloribus exercitationem. Ipsa alias nemo numquam quae totam architecto minus ex, voluptatem, dignissimos natus voluptas, unde facere molestiae voluptatibus vel sit ad suscipit laudantium`
        btn.innerHTML="Less Then"
    }
    else {
        para.innerHTML = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam veritatis ea quos sapiente animi? `
       btn.innerHTML="See More" 
    }

    console.log("hello wolrd")
}




