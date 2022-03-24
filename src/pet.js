function Pet(name) {
    this.name = name;
    this.age = 0;
}
Pet.prototype.growUp = function() {
    this.age += 1;
    this.hunger += 5;
    };
 Pet.prototype.walk = function() {
    if ((this.fitness + 4) <= 10) {
        this.fitness += 4;
    } else {
        this.fitness = 10;
    }
    }
module.exports = Pet;