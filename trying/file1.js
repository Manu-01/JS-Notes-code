//alert("just checking");

// let b = "manushukla";
// console.log(b);

// let a = "shobha_shukla"
// console.log(a);

//alert("heyyy");

//object//
//let person = {


//firstName :"manu" , 
// lastName : "shukla" ,
//  age : 24
//};

//console.log(person);

//array//

//let movie = ['jawan','shergil','shershah','23','true'];
//movie[3]='ramesh';
//console.log(movie[3]);

//constructor function//

//function sum(a,b) {
//this.a=a;
//this.b=b;

//this.add = function(){
//console.log("sum of number is");
//}  
//}

//let sumObject = new sum(2,3);


function even(num) {
  return new Promise((resolve, reject) => {
    if (num % 2 == 0) {
      resolve(`${num} is even`);
    }
    else {
      reject(new Error("oops this is odd"));
    }
  });
}
even(10).then(() => {
  console.log("resolved");
})
  .catch((err) => {
    console.log(err.message);
  })


// const handleEvenPromise = async () => {
//   try {
//     const res = await even(5)
//     console.log(res);
//   }
//   catch {
//     console.log(err);
//   }
// }
// handleEvenPromise();


