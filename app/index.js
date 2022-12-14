let a = new Set();
a.add(5);
a.add(43);
a.add("Whoohoo");
a.add({x: 50, y: 200});
a.add(5);
console.log(a.size);
console.log(a.has(5));

let numbers = [5, 7, 8, 13, 17];
let numSet = new Set(numbers);
console.log(numSet);

for (let element of numSet.values()) {
    console.log(element);
}


let chars = "asdafasgasdafsgfhdrgwefa";
let charsArr = chars.split("");
let charsSet = new Set(charsArr);
console.log(charsSet);

let b = new Map();
let key1 = "string key";
let key2 = { a: "key" };
b.set(key1, "return value from a string key");
b.set(key2, "return value from a object key");

for (let [key, value] of b.entries()) {
    console.log(`${key} points to ${value}`);
}

let string = "afwagwfsedgrtherfsfasdrgfatt";
let stringArr = string.split("");
let myMap = new Map();

for (let char of stringArr.values()) {
    if(myMap.has(char)) {
        let val = myMap.get(char);
        myMap.set(char, val+1)
    } else {
        myMap.set(char, 1);
    }
}

console.log(myMap);