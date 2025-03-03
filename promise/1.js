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


const evenPromise = (num) => {
    return new Promise((resolve, reject) => {
        if (num % 2 == 0) {
            resolve(`${num} is even`)
        }
        else {
            reject(new Error("odd number"))
        }
    });
}

const hPromise = async () => {
    try {
        const ans = await evenPromise(3);
        console.log(ans);
    }
    catch (error) {
        console.log("error", Error);
    }
}
hPromise();

// promise combinator has four type
// 1.all => if any of the promises is failed then it shows all failed
// 2.allSettled => if any of the promises is failed still its gonna return all the fullfilled promises
// 3.race => return first promise whehter it is fullfilled or reject.
// 4.any => return the first fullfilled promise.