// Filter, Map, Reduce

// const coding = [1, 2, 3, 4, 5]
// const New = coding.filter((num) => num > 2)  //single line arrow function
// console.log(New)

// const Array = [1, 2, 3, 4, 6, 7, 8, 9, 0, 12, 3, 44, 55, 67]
// const NewArr = Array.filter((num) => {   //multi line arrow function we should use return keyword
//     return num = num % 2 == 0
// })
// console.log(NewArr)

// const uerBooks = books.filter((bk) => bk.edition > 1989 && bk.edition < 2002) // object filter

//MAP

// const numbers = [1]
// const NewNums = numbers.map((num) => num * 2)  // map function
// console.log(NewNums)

//reduce

// const Num = [12, 34, 34, 4, 5, 6, 7]
// const NewNum = Num.reduce(function (acc, cuu) {   //reduce function
//     return acc + cuu
// }, 0)                  // 0 is the initial value of acc
// console.log(NewNum)

// const Num = [12, 34, 34, 4, 5, 6, 7]
// const NewNum = Num.reduce((acc, cuu) => acc + cuu, 0)  //reduce function with arrow function 
// console.log(NewNum)
// if we dont give initial value then it will take first element as initial value of an array

//differerce betweeen forEach and map

//chaining of map and filter
const arr = [
    {
        id: 1,
        marks: 20,
        name: "manu"
    },
    {
        id: 1,
        marks: 70,
        name: "manzar"
    },
    {
        id: 3,
        marks: 40,
        name: "mayank"
    },
    {
        id: 4,
        marks: 80,
        name: "megha"
    }, {
        id: 5,
        marks: 50,
        name: "mayanku"
    }
]

//    const newArr = arr.filter((ar)=>{
//        return ar.marks >=50 && ar.marks < 80
//    }).reduce((acc,curr)=>{
//        return acc.marks+curr.marks;
//    })

//    console.log(newArr)

const marks = arr
    .map((ar) => ar.name.toUpperCase())
    .filter((ary) => ary.startsWith('M'))

console.log(marks)

// const manu = arr.reduce((acc, curr) => {
//     return { marks: acc.marks + curr.marks };
// })
// console.log(manu)
