// let var const
// let and const are block scope
// var is function scope

// var can be hoiested
// let and const also can be hoisted but in temporal dead zone

// var can be redecalred
// let and const can not be redecalred

// var a ;
// var a;

// let b;
// but we can not redeclare variable using let but
// let c;
// {
//     let c;
// }

// let var and const can be hoisted but in temporal dead zone
// shadowing me var let ko same varoable name se declare kar sakte hai
// but in illeagal shadowing me nahi kar sakte hai.

// function abc() {
//     console.log(a);  // hoiested
//     var a = 10;
//     console.log(a); // now has value
// }
// abc();

// a();

// var a = function () {
//     console.log('manu');
// }
// b();
// function b() {
//     console.log('manu');
// }