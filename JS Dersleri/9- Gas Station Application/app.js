let dizel = 24.53;
let benzin = 22.25;
let lgp = 11.1;

const newLine = "\r\n";

const yakitMetni = "1-Dizle" + newLine + "2-Benzin" + newLine + "3-LPG" + newLine + "Yakıt Türü Seçiniz:";

let yakitTipi = prompt(yakitMetni);
let litre = Number(prompt("Almak İstediğiniz Litre Tutarını Giriniz:"));
let bakiye = Number(prompt("Lütfen Bakiyenizi Giriniz:"));

if(yakitTipi == "1"){
    // dizel
}
else if(yakitTipi == "2"){
    // benzin
}
else if(yakitTipi == "3"){
    // lpg
}
else{
    console.log("Hatalı Yakıt Türü Girildi");
}