const { copyAndPush } = require('./copyandpush');

describe('copyAndPush function', () => {
    it('returns a new array with all the items in the original array and a new item pushed to the end', () => {
        const numbers = [1, 2, 3];
        const newArray = copyAndPush(numbers, 4);

        expect(newArray).toEqual([1, 2, 3, 4]);
    })

    // it('returns the name property of an object', () => {
    //     const character = { _id: '5cf5679a915ecad153ab68c9', name: 'Aang' };
    //     const name = getName(character);

    //     expect(name).toEqual('Aang');
    // })
});