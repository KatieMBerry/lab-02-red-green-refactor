const copyAndPush = (array, num) => {
    const newArray = [...array, num];
    return newArray;
};


module.exports = {
    copyAndPush
};



/* Write a test
create your function, use push to add item to array and return array
green, commit
oops we were supposed to return a copy
add another test that makes sure that the original array is unchanged
update code, use spread to copy and append
green, commit */