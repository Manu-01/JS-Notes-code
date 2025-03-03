// objects

// we can create object in five Ways
// 1. using object literal
// let obj1 = { name: "John", age: 30 };
// 2. using new keyword
// let obj2 = new Object();
// obj2.name = "John";
// obj2.age = 30;
// 3. using constructor function
// function Person(name, age) {
//     this.name = name
//     this.age = age
//     }
// let obj3 = new Person("John", 30);
// 4. using Object.create
// let obj4 = Object.create(null);
// obj4.name = "John";
// obj4.age = 30;
// 5. using class
// class Person {
//     constructor(name, age) {
//         this.name = name
//         this.age = age
//         }
//         }
//         let obj5 = new Person("John", 30);

// object can access through .dot notaion as well as square[] notaion

// const mySym =symbol("key1")
// const obj ={
// 	name:"manu",
// 	[mySym]:"key1"
// 	"email":"shuklamanu",
// 	age:24
// }
// console.log(obj.name)
// console.log(obj["email"])
// console.log(obj[mySym])

// to freeze the object use syntax object.freeze(object name)

// object using new keyword
// const obj = new Object() => it is a single ton object
// obj.id = 123
// obj.name = "manu"
// console.log(obj)

// object.assign() use to conact the object
// const obj1 = {
// 	name: "manu",
// 	age: 24
// }
// const obj2 = {
// 	email: "shuklamanu@gmail.com",
// 	phone: 1234567890
// }
// console.log(Object.assign({},obj1, obj2))

// spread operator ={...obj1,...obj2} to concat the two values

// to create object dynamically
// let a = "username";
// let b = "manu";
// const obj = {
//     [a]: b
// }
// console.log(obj);

// object desctructing->

// const course = {
//     courseName: "JS",
//     courseDuration: 6,
//     courseFees: 50000
// }
// console.log(course.courseFees)

// const { courseDuration: cD } = course
// console.log(cD)

// we can use object method to convert in array from object
// Object.keys()
// Object.values()
// Object.entries()

// {
//     results: [
//         {
//             gender: 'male',
//             name: [Object],
//             location: [Object],
//             email: 'vincent.brown@example.com',
//             login: [Object],
//             dob: [Object],
//             registered: [Object],
//             phone: '(805)-933-6662',
//             cell: '(694)-306-6435',
//             id: [Object],
//             picture: [Object],
//             nat: 'NZ'
//         }
//     ]

// }


// function sum(a) {
//     return function (b) {
//         return function (c) {
//             return a + b + c
//         };
//     };
// }
// console.log(sum(2)(3)(5))

function sum(a) {
    return function (b) {
        if (b) return sum(a + b);
        return a;
    };
}
console.log(sum(2)(4)(4)(5)()()());

function add(a) {
    return function (b) {
        if (b) return add(a + b);
        return a;
    };
}
console.log(add(2)(3)(4)(6)());