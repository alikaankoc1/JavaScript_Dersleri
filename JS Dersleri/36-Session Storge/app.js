// değer ekleme

sessionStorage.setItem("1","Ali");
sessionStorage.setItem("2","Kaan");
sessionStorage.setItem("3","Aslı");


// değer silme 
sessionStorage.removeItem("1");
// sessionStorage.removeItem("3");

// değer getirme
let value = sessionStorage.getItem("3");
if(value == null){
    console.log("Değer Bulunamadı !");
}else{
console.log("Değer Bulundu:" + value);
}


// hepsinin silme
sessionStorage.clear();

// session-storge array olarak yazdırma

let names = ["Ali", "Ayşe", "Fatma", "Ahmet", "Cemal"];

sessionStorage.setItem("array", JSON.stringify(names));

let result = JSON.parse(sessionStorage.getItem("array"));
result.forEach(function(name){
    console.log(name);
})
// console.log(result);