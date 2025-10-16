const newButton = document.querySelector("#todoAddButton");
console.log(newButton);

newButton.addEventListener("click", changeTitle);

function changeTitle(e){
    document.querySelectorAll(".card-title")[0].textContent = "Click işlemi yapıldı"
}

