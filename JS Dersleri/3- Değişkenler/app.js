// var let const olmak üzere 3 tane değişken tanımlama yöntemi vardır.
// var: function scope, let ve const: block scope (kıvırcık parantezlerin içinde geçerlidir.)

function selamVer(){
   var  selam = "Merhaba Dünya <br>";
    document.writeln(selam)
}
selamVer();

 const  selam1 = "Merhaba Dünya <br>";
function selamVer1(){
  
    document.writeln(selam1)
}
selamVer1();

let selam2 = "Merhaba Dünya";
function selamVer2(){
   
    document.writeln(selam2)
}
selamVer2();


// let ? const  arasında ki fark nedir?
// let ile tanımlanan değişkenin değeri değiştirilebilir. const ile tanımlanan değişkenin değeri değiştirilemez.

let a =12;
a = 18;
console.log(a);

const b= 37;
console.log(b);
// b = 45;  Hata verir. const ile tanımlanan değişkenin değeri değiştirilemez.