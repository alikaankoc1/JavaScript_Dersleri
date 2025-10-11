// return amacı dışarıdan erişimi sağlar ve return methodun çağrıldığı yere gider.

function cube(sayi){
    let sonuc = sayi*sayi*sayi;
    return sonuc;
}
let donenDeger = cube(3);
console.log(donenDeger);