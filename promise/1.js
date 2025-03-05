// Promise
// it is a solution of callback hell . a promise is a bascially promise of code execution . code will either resolve or reject .

// syntax=>
// let promise = new Promise((resolve, reject) => {

// })

// console.log("start")

// const jvm = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         const result = true;
//         if (result) resolve("yeah its workinggg ");
//         else reject(new Error("oops something failed"));
//     }, 2000);
// });

// jvm
//     .then((res) => {
//         console.log(res);
//     })
//     .catch((err) => {
//         console.log(err);
//     });

// console.log("stop");

// const evenPromise = (num) => {
//     return new Promise((resolve, reject) => {
//         if (num % 2 == 0) {
//             resolve(`${num} is even`)
//         }
//         else {
//             reject(new Error("odd number"))
//         }
//     });
// }

// const handleEvenPromise = async () => {
//     try {
//         const ans = await evenPromise(6);
//         console.log(ans);
//     } catch (error) {
//         console.log(error);
//     }
// }

// handleEvenPromise();


// const evenPromise = (num) => {
//     return new Promise((resolve, reject) => {
//         if (num % 2 == 0) {
//             resolve(`${num} is even`)
//         }
//         else {
//             reject(new Error("odd number"))
//         }
//     });
// }

// const hPromise = async () => {
//     try {
//         const ans = await evenPromise(3);
//         console.log(ans);
//     }
//     catch (error) {
//         console.log("error", Error);
//     }
// }
// hPromise();



// function manu() {
//     console.log("start")
//     setTimeout(() => {
//         console.log("manu");
//     }, 2000)
//     console.log("end")
// }
// manu()



// firstPromise = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("first promise resolved!")
//         }, 100)
//     })
// }
// secondPromise = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             reject(new Error("fat gya"))
//         }, 0)
//     })
// }
// thirdPromise = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("hurray!")
//         }, 300)
//     })
// }

// Promise.any([firstPromise(), secondPromise(), thirdPromise()])
//     .then((res) => console.log(res))
//     .catch((err) => console.log(err))

// promise combinator has four type
// 1.all => if any of the promises is failed then it shows all failed , return in array
// 2.allSettled => if any of the promises is failed still its gonna return all the fullfilled promises , return in array of objct
// 3.race => return first promise whehter it is fullfilled or reject.
// 4.any => return the first fullfilled promise.


// firstPromise = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("first promise resolved!")
//         }, 100)
//     })
// }
// secondPromise = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             reject(new Error("fat gya"))
//         }, 200)
//     })
// }
// thirdPromise = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("hurray!")
//         }, 300)
//     })
// }

// const getData = async () => {
//     try {
//         const data = await Promise.allSettled([firstPromise(), secondPromise(), thirdPromise()]);
//         console.log(data);
//         const data2 = await Promise.any([firstPromise(), secondPromise(), thirdPromise()]);
//         console.log(data2);
//         const data3 = await Promise.race([firstPromise(), secondPromise(), thirdPromise()]);
//         console.log(data3);
//         const data4 = await Promise.all([firstPromise(), secondPromise(), thirdPromise()]);
//         console.log(data4);
//     }
//     catch (err) {
//         console.log(err);
//     }
// }

// getData();


// fourthPromise = () => {
//     return new Promise((resolve, reject) => {
//         setInterval(() => {
//             resolve("fourth promise resolved")
//         }, 1000)
//     })
// };
// fourthPromise()
//     .then((res) => {
//         console.log(res)
//     })
//     .catch((err) => {
//         console.log(err)
// })


