// // // // var userName = "jaffar aman"
// // // // // console.log("userName", userName.split(" "))

// // // // var strSplit = userName.split(" ")
// // // // // console.log(strSplit)
// // // // var tempArr = []
// // // // console.log(strSplit)

// // // // for (var i = 0; i < strSplit.length; i++) {

// // // //     if (strSplit[i] === " " || strSplit[i] === "") {
// // // //         continue
// // // //     }
// // // //     console.log(strSplit[i])
// // // //     var word = strSplit[i]
// // // //     var cap = word[0].toUpperCase() + word.slice(1).toLowerCase()

// // // //     tempArr.push(cap)
// // // //     console.log(cap)

// // // // }

// // // // console.log(tempArr, "tempArr")

// // // // var finalStr = tempArr.join(" ")
// // // // console.log("finalStr", finalStr)
// // // // // |||

// // // // // let str = "jamil afzal"
// // // // // let splitStr = str.split(",")
// // // // // console.log(splitStr)
// // // // // tempArr = []
// // // // // tempArr.push(splitStr)
// // // // // console.log("tempArr", tempArr)

// // // // // let finalStr = tempArr.join("")
// // // // // console.log("finalStr", finalStr)

// // // let userName = "jamil afzal"
// // // let userNameSplit = userName.split(" ")
// // // // console.log("userName", userNameSplit)
// // // let tempArr = []
// // // for (let i = 0; i < userNameSplit.length; i++) {
// // //     if (userNameSplit[i] == " " || userNameSplit[i] == "") {
// // //         continue
// // //     }
// // //     // console.log(userNameSplit[i])
// // //     let word = userNameSplit[i]
// // //     let cap=word[0].toUpperCase() + word.slice(1).toLowerCase()
// // //     tempArr.push(cap)
// // // //     // console.log(cap)

// // // // }
// // // // console.log(tempArr)
// // // let userName = prompt('enter your name')
// // // let userNameSplit = userName.split(' ')
// // // console.log(userNameSplit)
// // // let tempArray = []
// // // for (let i = 0; i < userNameSplit.length; i++) {
// // //   if (userNameSplit[i] === ' ' || userNameSplit[i] === '') {
// // //     continue
// // //   }
// // //   let word = userNameSplit[i]
// // //   let cap = word[0].toUpperCase() + word.slice(1).toLowerCase()
// // //   tempArray.push(cap)
// // // }
// // // let userNameFinal = tempArray.join('')
// // // console.log(userNameFinal)

// // // let str = "jaffar aman"
// // // str = str[0].toUpperCase() + str.slice(1).toLowerCase()
// // // console.log(str)

// // // let str =prompt("enter your name","jamil afzal")
// // // let splitStr = str.split(" ")
// // // let tempArray = []
// // // for (let i = 0; i < splitStr.length; i++){
// // //     if (splitStr[i] == " " || splitStr[i] == "") {
// // //         continue
// // //     }
// // //     let word = splitStr[i]
// // //     let cap = word[0].toUpperCase() + word.slice(1).toLowerCase()
// // //             tempArray.push(cap)
// // // }
// // // let finalStr = tempArray.join(" ")
// // //  console.log(finalStr)

// // let str = "The conflict, which is being considered as the biggest  Prime Minister escalation in decades prompted Israeli Prime Minister Benjamin Netanyahu to send a warning of a long and difficult war ahead as he dispatched thousands of Israeli forces  Prime Minister to combat remaining Hamas fighters in the south while the Prime Minister air force once more bombed targets in the Gaza Strip."
// // console.log(str.replace(/Prime Minister/g, "PM"))
// // console.log(str.indexOf(""))

// // let str = "jamil   afzal"
// // let strSplit = str.split(" ")
// // let tempArray = []
// // for (let i = 0; i < strSplit.length; i++){
// //     if (strSplit[i]==" "||strSplit[i]=="") {
// //         continue
// //     }
// //     let word = strSplit[i]
// //     let cap = word[0].toUpperCase() + word.slice(1).toLowerCase()
// //     tempArray.push(cap)
// // }

// // finalStr = tempArray.join("")
// // console.log(finalStr)

// // let str = prompt("Enter your name: ","john ")
// // let splitStr = str.split(" ")
// // let tempArray=[]
// // for (let i = 0; i < splitStr.length; i++) {
// //     if (splitStr[i] == " " || splitStr[i] == "") {
// //         continue
// //     }
// //     let word = splitStr[i]
// //     let cap = word[0].toUpperCase() + word.slice(1).toLowerCase()
// //     tempArray.push(cap)
// // }
// // let finalStr = tempArray.join(" ")
// // // console.log(finalStr)
// // let fristRamdan = new Date("11 March 2024")
// // let today = new Date()
// // let diff = fristRamdan - today
// // let day=diff/86400000

// // // console.log(Math.floor(day))

// // let fristRamdan = new Date("11 March 2024")
// // let today = new Date()
// // let diff = fristRamdan - today
// // let months = diff / (1000*60*60*24*30)
// // console.log("months:",+Math.floor(months))

// // let userDoBPrompt = prompt("enter your DOB")
// // let userDoB = new Date("12 jan 2004").getTime()
// // let today = new Date().getTime()
// // console.log("today:", today, "userDOB", userDoB)
// // let diff = today - userDoB
// // console.log("diff", diff)
// // let age = Math.floor( diff / (1000 * 60 * 60 * 24 * 365))
// // console.log("age", age)

// // let userName = "jamil afzal"
// // let userNameSplit = userName.split(" ")
// // console.log("userName", userNameSplit)
// // let tempArr = []
// // for (let i = 0; i < userNameSplit.length; i++) {
// //  if (userNameSplit[i]==" "||userNameSplit[i]=="") {

// //      continue
// //     }
// //     let word = userNameSplit[i]
// //     let cap = word[0].toUpperCase() + word.slice(1).toLowerCase()
// //     console.log(word)
// //     tempArr.push(cap)
// // }
// // let finalStr = tempArr.join(" ")
// // console.log(finalStr)

// //find age in this application

// // let userDOB = new Date("10 feb 2004").getTime()
// // let today = new Date().getTime()
// // let diff = today - userDOB
// // let age = (diff / (1000 * 60 * 60 * 24 * 365))
// // console.log(diff)
// // let userDOB = new Date("12 feb 2005").getTime()
// // let today = new Date().getTime()
// // let diff = today - userDOB/(1000 * 60 * 60 * 24* 365)
// // console.log(diff)
// // let userDOB = new Date("12 feb 2020").getTime()
// // let today = new Date().getTime()
// // let diff = today - userDOB
// // // console.log(diff)
// // let age = diff /(1000*60*60*24*365)
// // console.log(Math.floor(diff))

// // let date = new Date()
// // console.log(date.toDateString())    // new date is the datatype is object
// // console.log(date.getFullYear())
// // console.log(date.toTimeString())

// // let date = new Date().getDay()
// // let dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
// // console.log(dayNames[date])

// // let months = new Date().getMonth()
// // let monthsNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
// // console.log(monthsNames[months])

// // let hours = new Date().getHours()
// // let hourNames = ["12", "1","2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11"]
// // console.log(hourNames[hours])

// // let minutes = new Date().getMinutes()
// // // let minutesNumber = ["0", "1", "2", "3", "4", "5", "6", "7", "8","9", "10", "11","12","13","14","15","16", "17", "18", "18", "19", "20","21", "22", "23", "24", "25", "26", "27", "28", "29","30", "31", "32", "31", "32
// // console.log(minutes)
// // let sec = new Date().getSeconds()
// // console.log(sec)


// // let date = moment([2004, 11, 1 ]).fromNow();
// // console.log(date)

// // var a = moment([2007, 0, 28]);
// // var b = moment([2007, 0, 29]);
// //  console.log(a.from(b)) // "a day ago"


// // let a = moment([2020, 2, 1 ])
// // let b = moment([2023, 5, 1])
// // console.log(a.from(b))

// // let a =moment([2021,11,23])
// // let b = moment([2020, 11, 23])
// // console.log(a.from(b))
// // console.log(moment([2021,11,23]).fromNow())

// // function add(a, b) {
    
// //     return a + b
    
// // }
// // let result = add(12, 1)
// //  console.log(result)

// // function addNum(a, b) {
// //     return a + b


// // }
// // let result = addNum(13, 90)
// // console.log(result)

// let inp = document.getElementById("inp")
// inp.style.border = "1px solid red";
// inp.style.outline="none"
// let getul=document.getElementById('ul')
// function addValue() {
//     let li = document.createElement("li")
//     let liText = document.createTextNode(inp.value)
//     li.appendChild(liText)
//     ul.appendChild(li)
//     inp.value = " "
//     let deletbtn = document.createElement("button")
//     let deletebtnText = document.createTextNode("Delete")
//     deletbtn.appendChild(deletebtnText)
//     li.appendChild(deletbtn)
//     let editBtn = document.createElement("button")
//     let editbtnText = document.createTextNode("Edit")
//     editBtn.appendChild(editbtnText)
//     li.appendChild(editBtn)
//     deletbtn.setAttribute("onclick", "del(this)")
//     editBtn.setAttribute("onclick", "edit(this)")

// }

// function deleteAll(){
//     getul.innerHTML = ''
// }

// function del(e) {
//     e.parentNode.remove()
// }

// function edit(e) {
//     let a = prompt("Enter your editor value", e.parentNode.firstChild.nodeValue)
//     e.parentNode.firstChild.nodeValue = a
// }

function toggle1(e) {
    
}