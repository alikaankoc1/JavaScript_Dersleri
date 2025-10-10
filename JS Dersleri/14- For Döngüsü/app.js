// 1 den 10'a kadar yazdırma

for(let i=1; i<=10; i++){
    console.log(i);
}

// 0 dan 10'a kadar çiftler yazma

for(let i=0; i<=10; i+=2){
    console.log(i);
}

for(let i=0; i<=10; i++){
    if(i%2==0){
        console.log(i  +  " :Ali Kaan");
    }
    else{
        console.log(i + " :Koç");
    }
}

let toplam = 0;
for(let i = 30; i>=1;  i--){
    toplam +=i
    console.log(i);
}
console.log("Toplam:" +toplam);