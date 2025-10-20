// parametresiz
const yazdir = ()=>{
    console.log("Merhaba Dünya");
}
yazdir();

// parametreli
const names = (name,surname) =>{
    console.log(name, surname);
}
console.log("Ali Kaan", "Koç");

// sade hal
const kupAl = x =>  x*x*x;
console.log("Küp Değer:" +  kupAl(2));

// uzun hal
const kareAl = (y) =>{
    return y*y;
}
console.log("Kare Değer:" + kareAl(2));