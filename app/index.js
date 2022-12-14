function Wizard(name, house, pet) {
    this.name = name;
    this.house = house;
    this.pet = pet;

    this.greet = () => `I'm ${this.name} from ${this.house}`;

}

Wizard.prototype.petName;
Wizard.prototype.info = function () {
    return `I have a ${this.pet} named ${this.petName}`;
}

let harry = new Wizard("Harry Potter", "Gryffindor", "Owl");
harry.petName = "Hedwig";
console.log(harry);
console.log(harry.greet());
console.log(harry.info());