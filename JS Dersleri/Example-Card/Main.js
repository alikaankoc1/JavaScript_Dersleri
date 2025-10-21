let mesaj= `Migros'a Hoş Geldiniz
Money Kart Var mı ?
1- Evet
2-Hayır`;

const urunler =[
    {
        urunIsmi: "Süt",
        fiyat: 20
    },
    {
        urunIsmi : "Bebek Bezi",
        fiyat: 150
    },
    {
urunIsmi: "Kıyma",
fiyat: 489
    }
]

// true veya false
let sonuc = prompt(mesaj);
let odenecekTutar;

if(sonuc){
//money kart var
let isim = prompt("Lütfen Adınızı Giriniz:");
let soyisim = prompt("Lütfen Soyadınızı Giriniz:");
const musteri = new Musteri(isim,soyisim,sonuc,urunler);
odenecekTutar = musteri.hesapla();
alert(`Müşteri Bilgileri: ${isim} ${soyisim}
    Ödeneecek Tutar: ${odenecekTutar}`)
}
else{
    // money kart yok
    const musteri = new Musteri(null,null,sonuc,urunler);
    odenecekTutar = musteri.hesapla();
    alert(`Ödenecek Tutar: ${odenecekTutar}`);
}