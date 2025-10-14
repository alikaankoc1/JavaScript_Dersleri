// element oluşturma
let value = document.querySelectorAll(".card-body")[0];
console.log(value)



const link = document.createElement("a");

link.id = "goToWebSite";
link.className = "btn btn-dark btn-sm mt-3";
link.target = "_blank";
link.href = "https://alikaankoc1.github.io/website";
link.text = "Web Siteme Git";
console.log(link);

value.appendChild(link);