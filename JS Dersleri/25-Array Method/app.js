let cars = ["BMW","MERCEDES","VOLVO","HYUNDAİ","TESLA","TOGG"];

//push method dizinin sonuna eleman ekler.
cars.push("RENAULT");
console.log(cars);

//unshift dizinin başına eleman ekler.
cars.unshift("CHERRY");
console.log(cars);

//pop dizinin son elemanı kaldırır.
cars.pop();
console.log(cars);

//shift dizinin ilk elemanı kaldırır.
cars.shift();
console.log(cars);

//splice alınan parametre değere göre hem silme hem ekleme işlemi yapar.
cars.splice(2,0, "CHAVROLET");
console.log(cars);

//toString diziyi stringe çevirir.
console.log(typeof cars);
let stringCars = cars.toString();
console.log(typeof stringCars);
console.log(stringCars);

// reverse diziyi ters çevirir.
cars.reverse();
console.log(cars);