// asal sayı bulma örnek

let number = Number(prompt("Lütfen Bir Sayı Giriniz:"));

for(i=2; i<=Math.floor(number/2); i++){
    if(number%i==0){
        alert(number + " sayısı asal değildir !");
        break;
    }
    else{
        alert(number + " sayısı asaldır !")
    }
}