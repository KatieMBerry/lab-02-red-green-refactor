const { fetchQuotes } = require('./fetch-quotes');
const request = require('superagent');

describe('fetchQuotes function', () => {
    it('returns a single quote with the correct format', async () => {
        const quote = {
            character: "Bender",
            quote: "Bite my shiny metal ass.",
            image: "https://res.cloudinary.com/dzxqhkyqd/image/fetch/c_scale,w_500/https://res.cloudinary.com/dzxqhkyqd/image/upload/v1552429540/bender.png"
        }

        const fetchedQuote = await fetchQuotes();
        expect(fetchedQuote)
            .toEqual(
                {
                    character: expect.any(String),
                    quote: expect.any(String),
                    image: expect.any(String)
                });
    })
})