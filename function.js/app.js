// //    Rest permenters///
// // function valueInArray(a,...b) {
// //     console.log(a, b)
// //     console.log(b[10])
// //     return b
// // }
// //  valueInArray(1,2,3,4,5,6,7,8,9,10,11,12,13)


// // defualt permenters

// // function add(a, b=0) {
// //    return (4-(a*b))
// // }
// // let value = add(2)
// //   console.log(value)



// // arrow permenters

// // let add = function (a, b) {
// //    return a + b
// // }
// // let value = add(1, 9)
// //  console.log(value)


// // function collectThings(a,...b) {
// //     console.log(a)
// //     console.log(b)
// // }
// // let reulst = collectThings(1, 2, 3, 4, 5, 6, 7, 8, 9)
// // console.log(reulst)

// // function add(a, b) {
// //     return a + b
// // }
// // let result = add(2, 4)
// // let result1 = add(2, 2)
// // let result2 = add(2, 5)
// // let result3 = add(2, 9)
// // console.log(result)
// // console.log(result1)
// // console.log(result2)
// // console.log(result3)

// // function num(x) {
// //     if (x%2==0) {
// //         console.log("Evennumber")
// //     }
// //     else {
// //         console.log("oddnumber")
// // //     }
// // // }
// // // num(2)
// // // num(3)
// // // num(9)
// // // num(7)
// // // num(99)


// // let str = "jamil afzal"
// // let strSplit = str.split(" ")
// // let temArr = []
// // for (let i = 0; i < strSplit.length; i++) {
// //     if (strSplit[i] == " " || strSplit[i] == "") {
// //         continue
// //     }
// //     console.log(strSplit[i])
// //     let word = strSplit[i]
// //     let cap = word[0].toUpperCase() + word.slice(1).toLowerCase()
// //     console.log(cap)
// // }
// // let usernameStr =prompt("Enter your username","Jamil Afzal")
// // let usernameStrSplit = usernameStr.split(" ")
// // let tempArr = []
// // for (let i = 0; i < usernameStrSplit.length; i++) {
// //      if (usernameStrSplit[i] ==" " || usernameStrSplit[i]=="") {
// //         continue
// //     }
// //     let word = usernameStrSplit[i]
// //     let cap = word[0].toUpperCase() + word.slice(1).toLowerCase()
// //      tempArr.push(cap)
    
// // }

// // let finalStr = tempArr.join(" ")
// // console.log(finalStr)

// let Arr = ["jamil", "afzal", "khan"]
// let finalArr = Arr.pop()   //pop is the return delete array
// console.log(Arr)
// console.log(finalArr)



// let Arr = ["jamil", "afzal", "khan"]
// let finalArr = Arr.push(2)   //push  is the return update  array lenght
// console.log(Arr)
// console.log(finalArr)


// let Arr = ["jamil", "afzal", "khan"]
// let finalArr = Arr.shift()   //shift is the return delete array
// console.log(Arr)
// console.log(finalArr)


// let Arr = ["jamil", "afzal", "khan"]
// let finalArr = Arr.unshift(7)   //unshift is the return update  array length
// console.log(Arr)
// console.log(finalArr)



// let Arr = ["jamil", "afzal", "khan"]
// let finalArr = Arr.slice(2)//pop is the return update array
// console.log(Arr)
// console.log(finalArr)




// let Arr = ["jamil", "afzal", "khan"]
// let finalArr = Arr.splice(2,1,"adeel")   //splice  is the return delete and update  array
// console.log(Arr)
// console.log(finalArr)


// let array = [
//     ["jamil afzal"],
//     ["adeel afzal"]
// ]

// for (let i = 0; i < array.length; i++) {
//     // console.log(array[i])
//     for (let j = 0; j < array[i].length; j++) {
//     console.log(array[i][j])
//  }
// }

// let date = new Date()
// console.log(date)



// function addition(num) {
//     if (num%2==0) {
//         console.log("even number")
        
//     }
//     else {
//         console.log("odd number")
//     }
// }


// function add(num1, num2) {
//     console.log( num1 + num2)
// }


// let username =  prompt("Enter your name","jamil afzal")
// let usernameStrSplit = username.split(" ")
// let temArray = []
// for (let i = 0; i < usernameStrSplit.length; i++) {
// if (usernameStrSplit[i] === " "|| usernameStrSplit[i] ==="") {
    
//     continue
//     }
//     let word = usernameStrSplit[i]
//     let cap = word[0].toUpperCase() + word.slice(1).toLowerCase()
//     temArray.push(cap)
// }

// let finalStr=temArray.join(" ")
// console.log(finalStr)



function foo() {
    document.write("hello world!")
}