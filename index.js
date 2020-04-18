'use strict';
const numbers = new Map();


function isMultipleOfSeventeen(n){
    return n % 17 === 0;
}

Array.from(numbers)
.filter(isMultipleOfSeventeen);

module.exports = {
    isMultipleOfSeventeen
};
