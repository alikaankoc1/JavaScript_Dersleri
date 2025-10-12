let urun1 = {
    isim: "Monster Abra",
    kategori: "Teknoloji",
    fiyat: 23.250
}
let urun2 = {
    isim: "Monster Tulpar",
    kategori: "Teknoloji",
    fiyat: 32.250
}
let urun3 = {
    isim: "Acer Swith",
    kategori: "Teknoloji",
    fiyat: 17.459
}
let urun4 = {
    isim: "Acer Gaming",
    kategori: "Teknoloji",
    fiyat: 52.452
}
let urun5 = {
    isim: "Casper Excalibur",
    kategori: "Teknoloji",
    fiyat: 15.500
}

let urunler = [urun1,urun2,urun3,urun4,urun5];
let filtreliUrunler = [];
let kullancıInput = prompt("Aramak istediğiniz laptopu giriniz:");


function filterliUrunleriDoldur(urunler){
urunler.forEach(function(urun){
    if(urun.isim.toUpperCase().includes(kullancıInput.toUpperCase(),0)){
        filtreliUrunler.push(urun);
    }
})
}

function filterliUurnleriYazdir(urunler){
urunler.forEach(function(urun){
    console.log("------------------------");
    console.log("|" + urun.isim + "|" + urun.fiyat + "|" + urun.kategori);
    console.log("------------------------");
})
}

filterliUrunleriDoldur(urunler);
filterliUurnleriYazdir(filtreliUrunler);