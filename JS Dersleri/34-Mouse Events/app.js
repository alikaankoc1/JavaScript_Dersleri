// mouse events

// DOMContentLoaded

window.addEventListener("DOMContentLoaded",run);

function run(e){
    alert("Merhaba");
}

// load

window.addEventListener("load",run2);
function run2(e){
console.log("load click çalıştı");
}
  // click
const newButton = document.querySelector("#todoAddButton");

newButton.addEventListener("click",run3);

function run3(e){
    console.log(e.type);
}

//dbclick
const cardTitle = document.querySelectorAll(".card-title")[0];

cardTitle.addEventListener("dbclick",run4);
function run4(e){
    console.log(e.type);
}