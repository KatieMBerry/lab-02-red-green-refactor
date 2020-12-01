const { copyAndPush } = require('./copyandpush');

describe('copyAndPush function', () => {
    const numbers = [1, 2, 3];

    it('returns a new array with all the items in the original array and a new item pushed to the end', () => {
        const newArray = copyAndPush(numbers, 4);

        expect(newArray).toEqual([1, 2, 3, 4]);
    })

    it('checks the original array stays the same', () => {

        expect(numbers).toEqual([1, 2, 3]);
    })
});