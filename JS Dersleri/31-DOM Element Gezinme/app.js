let value = document.querySelector(".list-group");
// anneden çocuğa erişim
// value = value.children;
// value = value.children[1];
value = value.children[value.children.length-1];
value.innerHTML = "ASDSAF"
value.style.color = "red"





console.log(value);