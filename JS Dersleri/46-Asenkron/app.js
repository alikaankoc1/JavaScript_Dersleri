/* 
JavaScript senkron çalışan bir programlama dilidir.
Senkron: İşlemlerin sırayla yapılmasıdır.
Asenkron: İşlemlerin aynı anda yapılmasıdır.

Asenkron Çalışanlar:
Timing Events Http istekleri*/

console.log("Ali Kaan Koç");

setTimeout(()=>{
    console.log("1000 ms'de çalıştı");
},1000);

setTimeout(() => {
    console.log("750 ms'de çalıştı");
}, 750);

setTimeout(()=>{
    console.log("500 ms'de çalıştı");
},500)

console.log("Koç")