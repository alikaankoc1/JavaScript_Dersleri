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