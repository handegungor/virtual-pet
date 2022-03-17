const Pet = require('../src/pet');
describe('constructor', () => {
    it('returns an object', () => {
        expect(new Pet('Aslan')).toBeInstanceOf(Object);
    });
        it('sets the name property', () => {
            const pet = new Pet('Aslan');
            expect(pet.name).toEqual('Aslan');
    });
        it('has an initial age of 0', () => {
            const pet = new Pet('Fido');
            expect(pet.age).toEqual(0);
    });
    describe('growUp', () => {
        it('increments the age by 1', () => {
            const pet = new Pet('Aslan');
            pet.growUp();
            expect(pet.age).toEqual(1);
        });
        });
});