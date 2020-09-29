/****************
Error Messages
*/

// Syntax Error
/*
const multiply = (a, b) => {
    console.log(a * b);
}

multiply(5, 10);
*/


// Reference Error


/*
var greeting = 'Hello World';

console.log(greeting);
*/


// Type Error


/*
function multiply(a, b) {
    console.log(a * b);
}

multiply(2, 10);
*/

/****************
Debugging Example
*/


/*
function largerNumber(number1, number2) {
    if (number1 > number2) {
        return `${number1} is greater than ${number2}`;
    } else if (number2 > number1) {
        return `${number2} is greater than ${number1}`;
    } else {
        return `${number1} is the same as ${number2}`;
    }
}

console.log(largerNumber(4, 4));
*/

/****************
Debugging with console.log
*/

/*
function sentence(season) {
    var lowercase = season.toLowerCase();
    //console.log(lowercase);
    if (lowercase === 'summer') {
        return `It's so hot outside!`
    } else if (lowercase === 'winter') {
        return `It's so cold outside!`
    } else if (lowercase === 'spring') {
        return `The weather is perfect!`
    } else {
        return `I love this weather!`
    }
}

console.log(sentence('autumn'));
*/






























