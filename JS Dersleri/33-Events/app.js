const newButton = document.querySelector("#todoAddButton");
console.log(newButton);

const clearButton = document.querySelector("#todoClearButton");
console.log(clearButton);

newButton.addEventListener("click", changeTitle);

function changeTitle(e){
    document.querySelectorAll(".card-title")[0].textContent = "Click işlemi yapıldı"
    
}

clearButton.addEventListener("click",change);
function change(e){
    
    document.querySelectorAll(".list-group-item")[0].style.backgroundColor = "red";
}

