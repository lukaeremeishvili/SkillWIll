const validator = require('validator');

console.log(validator.isEmail('test@test.com')); //  true
console.log(validator.isEmail('abcDE123'));   // False

// node ReactDay1/main.js