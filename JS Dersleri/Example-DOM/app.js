const red = document.querySelector("#btn-red");
const blue = document.querySelector("#btn-blue");
const black = document.querySelector("#btn-black");
const green = document.getElementById("btn-green");

red.addEventListener("click", () =>{
    document.body.style.backgroundColor = "red";
})

blue.addEventListener("click",changeBlue);

function changeBlue(){
    document.body.style.backgroundColor = "blue";
}

black.addEventListener("click", ()=>{
    document.body.style.backgroundColor = "black";
})

green.addEventListener("click",changeGreen);
function changeGreen(){
    document.body.style.backgroundColor = "green";
}