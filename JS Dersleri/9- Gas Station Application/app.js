let dizel = 24.53;
let benzin = 22.25;
let lpg = 11.1;

const newLine = "\r\n";

const yakitMetni = "1-Dizle" + newLine + "2-Benzin" + newLine + "3-LPG" + newLine + "Yakıt Türü Seçiniz:";
let yakitTipi = prompt(yakitMetni);


if(yakitTipi == "1" || yakitTipi == "2" || yakitTipi == "3"){

let litre = Number(prompt("Almak İstediğiniz Litre Tutarını Giriniz:"));
let bakiye = Number(prompt("Lütfen Bakiyenizi Giriniz:"));


if(yakitTipi == "1"){
    //DİZEL
    let odencekTutar = dizel * litre;
    if(bakiye >= odencekTutar){
        alert("Ödeme Başarılı" + newLine + "Kalan Bakiyeniz:" + (bakiye - odencekTutar));
    }
    else{
        alert("Yetersiz Bakiye " + newLine + "Gerekli Tutar: " + odencekTutar + "TL");
    }
}
else if(yakitTipi == "2"){
    // benzin
let odencekTutar = benzin * litre
       if(bakiye >= odencekTutar){
        alert("Ödeme Başarılı" + newLine + "Kalan Bakiyeniz:" + (bakiye - odencekTutar));
    }
    else{
        alert("Yetersiz Bakiye " + newLine + "Gerekli Tutar: " + odencekTutar + "TL");
    }
}
else if(yakitTipi == "3"){
    // lpg
let odencekTutar = lpg * litre
       if(bakiye >= odencekTutar){
        alert("Ödeme Başarılı" + newLine + "Kalan Bakiyeniz:" + (bakiye - odencekTutar));
    }
    else{
        alert("Yetersiz Bakiye " + newLine + "Gerekli Tutar: " + odencekTutar + "TL");
    }
}

}
else{
    alert("Hatalı Yakıt Türü Girildi");
}