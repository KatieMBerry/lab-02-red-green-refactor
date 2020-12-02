const capitalizeAndFilter = array => {
    return array
        .filter(string => string.charAt(0) !== 'f')
        .map((string) => string.toUpperCase());
};


module.exports = {
    capitalizeAndFilter
};

/*Write a test
create a function, use a for loop to get test to pass
green, commit
refactor, use array methods to instead of a for loop*/