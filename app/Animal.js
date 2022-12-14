class Animal {
    constructor(name, height) {
        this.name = name;
        this.height = height;
    }

    static run() {
        console.log(`The animal can run`);
    }

    hello() {
        console.log(`Hi! I'am ${this.name} from the Animal kingdom`);
    }
}

export default Animal;