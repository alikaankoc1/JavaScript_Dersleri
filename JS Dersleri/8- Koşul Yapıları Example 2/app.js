let name = prompt("Lütfen adınızı giriniz:");
let tckn = prompt("Lütfen TC Kimlik Numaranızı Giriniz.");
// let phoneNumber = Number(prompt("Lütfen Telefon Numaranızı Giriniz:"));

// if(name = "" && tckn === 11 && phoneNumber === 10){
//     console.log("Kayıt Başarılı");
// }
// else{
//     console.log("Kayıt Başarısız");
// }

// function check(name, tckn, phoneNumber){
// if(name !== ""){
//     if( tckn.lenght === 11){
//         if(phoneNumber.lenght === 10){
//             console.log("Kayıt Başarılı");
//         }
//         else{
//             console.log("Hatalı Telefon Numarası");
//         }
//     }
//     else{
//         console.log("Hatalı TC Kimlik Numarası")
//     }
// }
// else{
// console.log("Hatalı Eksik İsim Girişi")
// }
// }

// check(name, tckn, phoneNumber);


function check(name, tckn) {
    if(name == "") {
        console.log("Hatalı Eksik İsim Girişi");
        return;
    }
    // TC kimlik numarasının 11 haneli olmasını kontrol et
    if(tckn.length !== 11 || isNaN(tckn)) {
        console.log("Hatalı TC Kimlik Numarası");
        return;
    }

    console.log("Kayıt Başarılı");
}

check(name, tckn);






