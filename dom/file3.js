// window is GLOBAL

//DOM-document object model => converting whole html code in js object known as DOM.

//BOM=> BROWSER OBJECT MODEL => content of webpage ko chorkar kisi ke bhi upar apply kr sakte hai.

//getElementsbyID('tagName','claasname');

// queryselector(.class name , #id name)

// let a = !1;
// console.log(a);

// let undefined = -1
// console.log(undefined)


//creating dynamically tag using dom 
var hell = document.querySelectorAll("#hey")
var hel = document.createElement('h2')
hel.innerHTML = 'hii manu';
hell.document.appendChild(hel);


