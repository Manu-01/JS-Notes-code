// curring?
// Currying is a technique in functional programming where a function with multiple arguments is transformed into a sequence of functions, each taking a single argument. 


// function curr(a) {
//     return function (b) {
//         console.log(a, b);
//     }
// }

// console.log(curr(5))



// function sum(a) {
//     return function (b) {
//         return function (c) {
//             return a + b + c;
//         };
//     };
// }
// console.log(sum(2)(6)(1));



// function evaluate(operation) {
//     return function (a) {
//         return function (b) {
//             if (operation === 'sum') return a + b;
//             else if (operation === 'sub') return a - b;
//             else if (operation === 'mul') return a * b;
//             else if (operation === 'div') return a / b;
//             else return "invalid operation"
//         };
//     };
// }
// console.log(evaluate('sum')(2)(8))

//infinite curring

function add(a) {
    return function (b) {
        if (b) return add(a + b);
        return a;
    };
}
console.log(add(2)(3)(4)(6)());