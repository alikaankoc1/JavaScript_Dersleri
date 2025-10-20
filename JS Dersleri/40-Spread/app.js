let dizi1 = ["Java","Php"];
let dizi2 = ["Pyhton","C",...dizi1];
console.log(dizi2);


const numbers =  [1,2,3,4,5,6,7,8];

let [a,b,...kalanDizi] = numbers;
console.log(a,b,kalanDizi);