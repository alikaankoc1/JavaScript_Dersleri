//eski versiyon
let langs = ["C#", "C", "Pyhton", "JavaScript", "Java"];
let lang1,lang2,lang3,lang4,lang5;

lang1 = langs[0];
lang2 = langs[1];
lang3 = langs[2];
lang4 = langs[3];
lang5 = langs[4];

console.log(lang1, lang2,lang3,lang4,lang5);

// destructing

let cars = ["Volvo","Hyundai","Toyota","Renault"];
let car1,car2,car3,car4;
[car1,car2,car3,car4] = cars;
console.log(car1,car2,car3,car4);