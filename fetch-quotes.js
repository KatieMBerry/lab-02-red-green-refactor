const request = require('superagent');

const fetchQuotes = async () => {
    const response = await request.get('http://futuramaapi.herokuapp.com/api/quotes');

    return response.body[0];
};


module.exports = {
    fetchQuotes
};