//inbuilt function

// let x = Math.random(); // math inbuilt fucntion , can also check for more function in mdn website(:
// console.log(x);

// let lastName = 'shukla';

// let message = `this
// is
// just checking
// new thing ${lastName}`   // $ known as literal
// console.log(message); // `` known as back ticks

//DATE AND TIME//

// let date = new Date()
// console.log(date);

//ARRAYS//

// let num = [1, 2, 3, 4];
// num.unshift(10); // insert new element in startting
// num.push(12); // inserting a new element in end
// num.splice(3, 0, 'iamnewisnert'); // for any change in middle
// console.log(num);
//primitive types me sirf indesxOf chalega object me nhi uske liye callback function lagana padega
// let make an object type of array

// let items = [
//     { no: 1, name: 'switch', quantity: '20pcs' },
//     { no: 2, name: 'socket', quantity: '20pcs' }
// ];
// console.log(items);

// let item = items.find(function(item) { //callbck function => function inside another function known as callback();
// return items.no===1;
// });

// let item = items.find(item => item.name === 'switch'); //arrow functions

// console.log(item);

// let numbers = [1, 2, 3, 4, 5, 6];
// numbers.splice(0, 1);
// numbers.pop(); // removing element from end
// numbers.shift(); // removing element from beggining
// console.log(numbers); // splice is used for removing element from middle

// let first = ['manu', 1, 'shukla'];
// let second = ['shobha', 2, 'shukla'];
// let combined = first.concat(second); // adding two arrays by concating function
// console.log(combined);

// let sliced = combined.slice(2, 5); //slicing for get particular array , here last index is exclude like (2,5) only 2,3,4 is visible (:
// console.log(sliced);

//spread operator

// let munn = ['bhawna', 'gunn'];
// let manu = ['gunn', 'chacha'];
// let add = [...munn, ...manu]; // known as spread operator
// console.log(add);

//for-of loop se in only iterate arrays
// let m = [1, 4, 6, 8];

// for (let value of m) {
//     console.log(m);
// }
// for-each method
// let nums = [1, 2, 3, 4, 5];

// nums.forEach(digit => console.log(digit));

// join array

// let n = ['manu', 'shukla', 21];
// const joined = n.join('/');  // join array
// console.log(joined);

//filter()

// let c = [-12, 14, -43, 57];

// let filterd = c.filter(value => value > 0) //filter()
// console.log(filterd);

//map()

// let a = ['manu', 'shukla', 'you', 'know'];

// let mapped = a.map(value => value + Math.random());  //mapping()
// console.log(mapped);

//hoisitng => is the process of moving function declaration to the top of file by automatically known as HOISTING

// run(); // hoisting
// function run() {
//     console.log('runnning perfectly');
// }
// function assignment

// let up = function sit() {  // assign the function assignment by "up"
//     console.log("sitdown.");
// }
// up();
// function has two types => 1. Named function 2. Annonyms function

// add two numbers
// function sum(a, b) {
//     return (a + b);
// }
// console.log(sum(3, 4));

// simple intersrt

// function interest(p, r = 10, y = 6) {  //=> set values by yourself known as default parameters
//     return p * r * y / 100;
// }
// console.log(interest(500));

// getter and setter , fetch the value known as GETTER , set the value known as SETTER

// let person = {
//     firstName: 'manu',
//     middleName: 'shukla',
//     get fullname() {
//         return `${person.firstName} ${person.middleName}`;  // `$` known as placeholder , this can only read
//     },
//     set fullname(value) {
//         this.firstName[0];
//         this.middleName[1];
//     }


// };
// console.log(person.fullname);

// try and catch block

// try {

//}
// catch (error) {

//}

// let only works in {block} can not access outside the block
// var can work in {} and outside the block , but if var in fucntion the only in{} works
// const is constant always decalre anywhere

// redcuing ?
// let arr = [1, 3, 5, 7, 9]
// {
//     totalSum = arr.reduce((list, value) => list + value, 0);
// }
// console.log(totalSum);

// let sumOf = ((a, b) => a + b);
// console.log(sumOf(4, 5));

// const arrays = [1, 2, 3, 4, 5, 6]
// console.log(arrays.pop());


