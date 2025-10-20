const map1 = new Map();
map1.set(34, "İstanbul");
map1.set(42, "Konya");
map1.set(43, "Kütahya");
map1.set(45, "Manisa");

const donenDeger = map1.get(43);
console.log(donenDeger);

console.log(map1.size);


console.log(map1.delete(34));
console.log(map1.size);

for(let [key,value] of map1){
    console.log(key,value);
}

const newArray = Array.from(map1);
newArray.forEach((array)=>console.log(array))