// // // // // function sum(a,b) {
// // // // //     console.log(a+b)
// // // // // }
// // // // // function calculate(a, b,sum) {
// // // // //     sum(a, b)
// // // // // }
// // // // // calculate(2,3,sum)
// // // // function add(a,b) {
// // // //     console.log(a+b)
// // // // }
// // // // function munber(a, b, sum) {
// // // //     sum(a, b)

// // // // }
// // // // munber(2,3,add)

// // // // // <!------------arrow function-------------->
// // // // const sum = (a,b) => {
// // // //     console.log(a+b );
// // // // }
// // // // sum(12,12)
// // // // let percentage = (a) => {
// // // //     let totalNumber = 500
// // // //     let userCount = prompt("Enter a number")
// // // //     let per = userCount / totalNumber * 100
// // // //     console.log(per+"%");
// // // // }
// // // // percentage()

// // // let userTable = prompt("enter a number to create table")
// // // for (let i = 0;i <=10;i++) {
// // // document.write(userTable+"x"+i+" "+"="+userTable*i+"<br/>")
// // // }
// // function getData(dataId) {
// //     setTimeout(() => {
// //  console.log("data"+dataId);
// //     },2000)
// // }
// // getData(099)
// // getData(78)
// // getData(23)
// // getData(12)

// // // // // <!------------arrow function-------------->
// // function getData(dataId,nextGetData) {
// //     setTimeout(() => {
// //         console.log("data", dataId)
// //         if (false) {
// //             nextGetData()
// //         }
// //         else {
// //             alert("Erro")
// //         }
// //     },5000)
// // }
// // getData(1, () => {
// //     getData(2)
// // })

// function getData(id, nextGetData) {
//     setTimeout(() => {
//         console.log("data", id);
//         if (nextGetData) {
//             nextGetData()
//         }
//     },4000)
// }

// getData(1, () => {
//     getData(2)
// })

// let stdObj = {
// }
// let std1 = new StdObj("jamil ", "male")
// console.log(std1);

// function Students(name, age, gender, id) {
//     this.name = name
//     this.age = age
//     this.gender = gender
//     this.id = id
// }
// let std1 = new Students("jamil", "male", 20, 100)
// let std2 = new Students("adeel", "male", 10, 101)
// let std3 = new Students("manzoor", "male", 23, 102)
// let std4 = new Students("mazhar", "male", 20, 103)
//     // console.log(std1, std2, std3, std4)
// console.log(std1.name);