class Person{
    constructor(){
        console.log("Constractor methodu çalıştı");
    }
}
const insan1 = new Person();
const insan2 = new Person();

/*
1-Yapıcı Method
2-Özellik
3-Function
*/

class Insan{
    constructor(name,surname,job,age,salary){
       this.a = name;
       this.b = surname;
       this.c = job;
       this.d = age;
       this.e = salary;
    }
    bilgileriGoster(){
        console.log(
            `      İsim: ${this.a}
      Soyisim: ${this.b}
      Meslek: ${this.c}
      Yaş: ${this.d}
      Maaş: ${this.e}`
        )
    }
}

let result = new Insan("Ali Kaan","Koç","Software Developer",24,57,950);

result.bilgileriGoster();