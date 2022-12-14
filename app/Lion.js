import Animal from "./Animal";

class Lion extends Animal {
    constructor(name, height, color) {
        super(name, height);
        this.color = color;
    }

    hello() {
        console.log(`Hi! I'am ${this.name} from Pride Rock`);
    }
}

export default Lion;