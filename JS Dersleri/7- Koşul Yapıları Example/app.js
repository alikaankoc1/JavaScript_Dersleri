let vize1 = Number(prompt("1. Vize Notunuzu Giriniz:"));
let vize2 = Number(prompt("2. Vize Notunuzu Giriniz:"));
let final = Number(prompt("Final Notunuzu Giriniz:"));

let avarege = (vize1*0.3) + (vize2*0.3) + (final*0.4);

if(avarege >= 50 && final >= 50){
    console.log("Dersten Geçtiniz. Notunuz:" + avarege);
}
else{
    console.log("Dersten Kaldınız. Notunuz:" + avarege);
}