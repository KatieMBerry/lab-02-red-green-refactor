const capitalizeAndFilter = array => {
    // const filteredArray =  array.filter(string => !string.charAt(0) === 'f');
    // return filteredArray
    let newArray = [];

    for (let i = 0; i < array.length; i++) {
        // let string = array[i];
        if (array[i].charAt(0) !== 'f') {
            newArray[newArray.length] = array[i].toUpperCase();
            // return string.toUppercase();
        }
    }
    return newArray;
};


module.exports = {
    capitalizeAndFilter
};

/*Write a test
create a function, use a for loop to get test to pass
green, commit
refactor, use array methods to instead of a for loop*/