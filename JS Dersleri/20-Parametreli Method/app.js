function yazdir(name,surname){
    console.log(name + " " + surname);
}
yazdir("Ali Kaan", "Koç");
yazdir("Ali", "Veli")

// bir sayının küp alma function

function cube(number){
    console.log(number*number*number);
}
cube(5);
cube(7);
cube(8);

// yaş sınırına göre function example
let yas = Number(prompt("Lütfen yaşınızı giriniz:"));

function check(age){
    if(yas>18){
        console.log("Ehliyet Alabilirsiniz.");
    }
    else{
        console.log("Ehliyet Alamazsınız.");
    }
}
check(yas);
