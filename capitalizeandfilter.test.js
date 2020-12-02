const { capitalizeAndFilter } = require('./capitalizeandfilter');

describe('capitalizeAndFilter function', () => {
    const arrayOfStrings = ['spot', 'rover', 'bingo', 'fred'];

    it('takes an array of strings, capitalize all strings, and filters out any string that starts with the letter f', () => {


        expect(capitalizeAndFilter(arrayOfStrings)).toEqual(['SPOT', 'ROVER', 'BINGO']);
    })
});