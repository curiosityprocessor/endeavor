const {odd, even} = require('./vars');

function checkOddOrEven(num) {
    if(num % 2) {
        return odd;
    } else {
        return even;
    }
}

module.exports = checkOddOrEven;