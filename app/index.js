import Animal from "./Animal";
import Lion from "./Lion";

Animal.run();

let king = new Animal("Mufasa", 4,5);
console.log(king);
king.hello();

let son = new Lion("Simba", 2, "golden");
console.log(son);
son.hello();
