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

// example

const hesapla = (a,b)=>{
    const topla = a +b;
    const cikar = a-b;
    const carp = a*b;
    const bol = a/b;
    const dizi = [topla,cikar,carp,bol];
    return dizi;
}

let [a,b,c,d] = hesapla(10,2);
console.log(a,b,c,d);

// example2
const person = {
    name: "Ali Kaan",
    surname: "-Koç",
    job: "-Software Developer",
    age: "-" + 25,
    salary: "-" + 59.750
}

let{name,surname,job,age,salary} = person;

console.log(name,surname,job,age,salary);