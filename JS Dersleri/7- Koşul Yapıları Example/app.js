// let vize1 = Number(prompt("1. Vize Notunuzu Giriniz:"));
// let vize2 = Number(prompt("2. Vize Notunuzu Giriniz:"));
// let final = Number(prompt("Final Notunuzu Giriniz:"));

// let avarege = (vize1*0.3) + (vize2*0.3) + (final*0.4);

// if(avarege >= 50 && final >= 50){
//     console.log("Dersten Geçtiniz. Notunuz:" + avarege);
// }
// else{
//     console.log("Dersten Kaldınız. Notunuz:" + avarege);
// }

//----------------------------------------------------------------------------------------

let vize1 = Number(prompt("1. Vize Notunuzu Giriniz:"));
let vize2 = Number(prompt("2. Vize Notunuzu Giriniz:"));
let final = Number(prompt("Final Notunuzu Giriniz:"));

let avarege = (vize1*0.3) + (vize2*0.3) + (final*0.4);

if(avarege >= 81 && avarege <= 100){
    console.log("Matematik 2 Ders AA ile Geçtiniz. Notunuz: " + avarege);
}
else if(avarege >= 61 && avarege <= 80){
    console.log("Matematik 2 Ders BB ile Geçtiniz. Notunuz: "  + avarege );
}
else if(avarege >= 40 && avarege <= 60){
    console.log("Matematik 2 Ders CC ile Geçtiniz. Notunuz: " + avarege);
}
else{
    console.log("Matematik 2 Dersinden Kaldınız. Notunuz: " + avarege);
}