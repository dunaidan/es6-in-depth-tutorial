let king = {name: "Mufasa", kids: 1};
let {name, kids} = king;
console.log(name, kids); 


let cheer = () => console.log("Whoohoo");
cheer();

setTimeout(() => console.log("Ihaaa"), 3000);

let values = [20, 30, 40];
let doubled = values.map((n) => n*2);
console.log(doubled);

import { fellowship, total } from "./fellowship";
console.log(fellowship, total);

import add from "./math";

console.log(`Sum of 5 and 10 is: ${add(5, 10)}`);

