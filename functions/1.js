// FUNCTIONS->

// when function define then we pass parameter

// function addTwo(num1,num2){  -> parameter
// 	console.log(num1+num2)
// }
// addTwo(5,6) -> argument

// when function call then we pass argume
// if we do not return anyting in fucntion it will cosnole undefined ,ex- console.log(functioncall)

// function logOutMessage(username) {
//     return `${username} logout succesfully`
// }
// console.log(logOutMessage("mayank"))     this is how we use function

//  rest operator always use in function definition
//  spred operator always use in function calling

// fucntions in  array and Object
// function calculatePrice(val1, val2, ...num1) {
//     return num1;
// }
// console.log(calculatePrice(10, 20, 30, 40, 50))

//funtions using object
// const user = {
//     name: "manu",
//     age: 25
// }
// function handleobject(anyobject) {
//     console.log(`username is ${anyobject.name} and age is ${anyobject.age}`);
// }
// handleobject(user)

// const arr = [100, 200, 300, 300]

// function thirdValuse(arr) {
//     return [arr[1], arr[2]];
// }
// console.log(thirdValuse(arr))

// SCOPES
// 1. GLOBAL SCOPE outside the block anywhere in code
// 2. LOCAL SCOPE
// 3. BLOCK SCOPE code only written in {}

// var c = 300
// if (true) {
//     var c = 30
//     let a = 30
//     const b = 25
// console.log(a, b) this is only run as this is inside the block scope
// }
// console.log(a)
// console.log(b)
// console.log(c) this will run as var is global scope

// child Function can access thier parent function
// function parent() {
//     let username = "manu";

//     function child() {
//         let name = "mayank";
//         console.log(username)
//     }
//     child()
// }
// parent()

// if (true) {
//     const username = "manu"
//     if (username === "manu") {
//         const website = " youtube"
//         console.log(username + website)
//         // console.log(website);
//     }
//     console.log(website);
//     // console.log(username)
// }
// console.log(username)

// function addone(num) {
//     return num + 1
// }
// console.log(addone(-2))

// const addTwo = function (num) {
//     return num + 2
// }
// console.log(addTwo(5))

// var manu = 10
// let mayank = 20
// mayank will not print window as let didnt attach in window only var works here

// arrow function ()=> or

// (()=>{
// use return because we create a scope
// })

// const addOne = (num) => {
//     return num + 1
// }
// console.log(addOne(5))

// const addOne = (num) => num + 1
// console.log(addOne(5))

// const addOne = num => num + 1
// console.log(addOne(5))

// const addTwo = (num1, num2) => num1 + num2
// console.log(addTwo(5, 6))

//  IIFE
// (function(){
//     console.log("manu")
// })();

// (() => console.log(1))(); // iife arrow function

// there are mainly five types of function

// 1. Named function
// function manu() {
//   console.log("manu")
// }

// 2. Anonymous function
// function() {
//   console.log("manu")
// }

// 3. Arrow function
// () => console.log("manu")

// 4. IIFE function
// (function () {
//   console.log("manu")
// })();

// 6. Callback function
// function manu(callback) {
//   callback();
// }

// 7. Higher order function
// function manu(callback) {
//   callback();
// }

// 10. Recursive function
// function manu() {
//   console.log("manu")
//   manu()
// }

// 11. Currying function
// function manu(a, b) {
//   return a + b
// }

// (function manu() {
//   console.log("manu")
// })();
// (() => console.log("mayank"))();

// callback function

function manu(megha) {
  megha();
}
function megha() {
  console.log('manu')
}
manu(megha);

function x(y) {
  y();
}
function z() {
  console.log('z')
}
x(z);