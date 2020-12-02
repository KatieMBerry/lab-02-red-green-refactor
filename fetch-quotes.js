const request = require('superagent');

const fetchQuotes = async () => {
    const { body } = await request.get('http://futuramaapi.herokuapp.com/api/quotes/1');

    const result = body[0];

    const quote =
    {
        character: result.character,
        quote: result.quote,
        image: result.image
    }

    return quote;
};


module.exports = {
    fetchQuotes
};