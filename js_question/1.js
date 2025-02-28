//print this in tabular form
// const user = [
//   { name: "manu", contact: 8318540488, city: "kanpur" },
//   { name: "megha", contact: 9871066982, city: "delhi" },
//   { name: "manzar", contact: 8318540488, city: "mujjafarnagar" },
// ];
// console.table(user);

// let a = NaN ** 0;
// console.log(a); =>always give output 1

// let arr = [
//     {
//         name: "manu",
//         marks: 64
//     },
//     {
//         name: "mayank",
//         marks: 4
//     },
//     {
//         name: "megha",
//         marks: 67
//     }
// ]
// const result = arr.filter((arr) => arr.marks > 60)
// console.log(result);

// const mySym = Symbol("key1")
// const obj = {
//     name: "manu",
//     [mySym]: "mykey1",
//     "email": "shuklamanu",
//     age: 24
// }
// console.log(obj.name)
// console.log(obj["email"])
// console.log(typeof obj[mySym])
// console.log(obj)

// object using new keyword
// const obj = new Object() => it is a single ton object
// obj.id = 123
// obj.name = "manu"
// console.log(obj)

// const obj1 = {
//     name: "manu",
//     age: 24
// }
// const obj2 = {
//     email: "shuklamanu@gmail.com",
//     phone: 1234567890
// }
// console.log(Object.assign({}, obj1,obj2))

// for (let i = 0; i < 5; i++) {
//     setTimeout(function () {
//         console.log(i);
//     }, i * 1000)
// }

// var a = 10;
// {
//     var a = -10;

// }
// let b = a;
// {
//     let b = -20;

// }

// console.log(b)

// function x(y) {
//     y();
//     console.log('manu');
// }
// function z() {
//     console.log('manu');
// }
// x(z);

// fetch("https://jsonplaceholder.typicode.com/todos/1")
//     .then((response) => {
//         return response.json();
//     })
//     .then((data) => {
//         console.log(data);
//     })
//     .catch((error) => {
//         console.log(error);
//     })

// async function getData() {
//     let response = await fetch("https://jsonplaceholder.typicode.com/todos/1")
//     let data = await response.json();
//     console.log(data);
// }
// getData();

// (function manzar() {
//     console.log('manzar')
// })();
// let obj = {
//     a: 10,
//     b: 20,
//     key: function () {
//         return { name: this.a, name2: this.b }
//     },
//     key1: function () {
//         const abc = () => {
//             return { name: this.a, name2: this.b }
//         }

//         return abc;
//     },
// }
// console.log(obj.key());
// console.log(obj.key1()());
// let a = 'manu';
// let b = 'megha';

// let obj = {
//     [a]: b
// };
// console.log(obj);

// const arr = [...'manu']
// console.log(arr);

// console.log(+"manu")

