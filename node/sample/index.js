const {odd, even}  = require('./vars');
const checkNumber = require('./func');

function checkStringOddOrEven(str) {
    if(str.length % 2) {
        return odd;
    } else {
        return even;
    }
}

console.log(checkNumber(7));
console.log(checkStringOddOrEven('node'));