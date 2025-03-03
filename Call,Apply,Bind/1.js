// const obj = { name: 'manu' };

// function Hello(age) {
//     return "Hello " + this.name + " your age is " + age;
// }
// console.log(Hello.call(obj, 24));


// const obj2 = { name: 'manu' };

// function Hello(age, branch) {
//     return "Hello " + this.name + " your age is " + age + " and your branch is " + branch;
// }
// console.log(Hello.apply(obj2, [24, "MCA"]));

// in apply() data should be passed in an array form 

const obj = { name: "manu" };

function Manu(age) {
    return "hello " + this.name + " age is" + age;
}
console.log(Manu.call(obj, 24));

