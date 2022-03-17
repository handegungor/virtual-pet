const Pet = require('../src/pet');
describe('constructor', () => {
    it('returns an object', () => {
        expect(new Pet('Aslan')).toBeInstanceOf(Object);
    });
        it('sets the name property', () => {
            const pet = new Pet('Aslan');
            expect(pet.name).toEqual('Aslan');
    });
});