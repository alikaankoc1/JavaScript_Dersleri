// Diyalog Kutulari
// alert: Kullaniciya bilgi vermek icin kullanilir.

alert("İşleminize devam etmek için kaydediniz !");

// prompt: Kullanıcıdan bilgi almak için kullanılır. Kullanıcıdan alınan bilgi string veri türünde döner.

let name = prompt("Lütfen adınızı giriniz:");
let age = prompt("Lütfen yaşınızı giriniz:");
console.log("Adınız:" + name);
console.log("Yaşınız:" + age);

// confirm: Kullanıcıdan onay almak için kullanılır. Kullanıcı "Tamam" butonuna basarsa true, "İptal" butonuna basarsa false döner.

let onay= confirm("Bu işlemi onaylıyor musunuz ?");
console.log(onay);