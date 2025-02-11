const t1 = performance.now();
for (let i = 0; i < 100; i++) {
    let a = document.createElement('p');
    a.textContent = 'this is para', + i;// adding 100 paragraph
    document.body.appendChild(a);
}
const t2 = performance.now();
console.log("this took" + (t2 - t1) + "ms");//reload time 


let b = document.createElement('h3')
b.textContent = 'manu';
document.body.appendChild(b)//adding h3 tag using dom

// set timeOut
let a = "manu";
console.log(a);



