// selector: seçiciler 1- ıd 2- className 3- tagName göre seçilir.


// id ye göre yakalar
let value = document.getElementById("todoAddButton");

console.log(value);

console.log(value.id);
console.log(value.getAttribute("id"));

console.log(value.className);
console.log(value.getAttribute("class"));

console.log(value.classList);
console.log(value.classList[2]);

console.log(value.type);
console.log(value.getAttribute("type"));


// innerHTML HTML elementleri algılar textContent ise algılamaz.
// value.innerHTML = "<b>SELAM</b>";
value.textContent = "<b>afsdasd</b>"


// className' e göre yakalar

let result = document.getElementsByClassName("card-title");

console.log(result.item(1));
result.item(0).innerHTML  = "Yapılacaklar Listesi"
result.item(1).textContent = "asdfasdf"