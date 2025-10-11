// metinde geçen harf sayı bulma

let text = "Dumlupınar Üniversitesi Bilgisayar Mühendisliği 4. sınıf öğrencisiyim.";

let harf = prompt("Bulmak istedğiniz harfi giriniz:");

function bul(harf){
    let toplam = 0;
    for(let i = 0; i<=text.length; i++){
        if(text.charAt(i)===harf){
          toplam +=1;
        }
        
    }
    return toplam;
}
let sonuc =  bul(harf);
alert(sonuc);
