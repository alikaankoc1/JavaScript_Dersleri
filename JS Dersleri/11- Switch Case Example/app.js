// ATM Switch Case Example

let bakiye = 5000;
const newLine = "\r\n";
const text = "1- Bakiye Öğrenme " + newLine + "2- Para Çekme" + newLine + "3- Para Yatırma" + newLine + "4- Çıkış" + newLine + "İşlem Seeçiniz:";

let islem = Number(prompt(text));

switch(islem)
{
    case 1:
        alert("Bakiyeniz: " + bakiye);
    break;

    case 2:
        let cekilecekTutar = Number(prompt("Çekmek istediğiniz tutarı giriniz:"));
        if(cekilecekTutar < bakiye){
            alert("İşlem Başarılı, Kalan Bakiye: " + (bakiye-cekilecekTutar));
        }
        else{
            alert("İşlem Başarısız. Çekmek istenen tutar, bakiyeden fazla ! Eksik Bakiye: "  + (cekilecekTutar - bakiye) );
        }
        break;

        
}