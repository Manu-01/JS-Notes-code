const div = document.querySelector("div");
const form = document.querySelector("form");
const button = document.querySelector("button");

div.addEventListener("click", function () {
    alert("div");
});

form.addEventListener("click", function () {
    alert("FORM");
}, {
    capture: true // this will first execute 
});

button.addEventListener("click", function () {
    alert("BUTTON");
});


// event bubbling is a default behavioiur
// event capturing is a non default behaviour
// event delegation is a technique to handle event in parent element
// event delegation is used to handle event in parent element

// we can prevent default behaviour using preventDefault()
// we can prevent default behaviour using stopPropagation()