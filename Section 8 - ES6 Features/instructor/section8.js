/****************
Let and Const
*/

// let and const cannot be redeclared


/*
var x = 10;
var x = 11;
console.log(x);
*/



/*
let y = 10;
let y = 11;
console.log(y);
*/

/*
const z = 10;
const z = 11;
console.log(z);
*/

// const cannot be reassigned


/*var y = 15;
y = 20;
console.log(y);*/


/*
let x = 10; 
x = 12;
console.log(x);
*/

/*
const x = 20;
x = 25;
console.log(x);
*/


// var function scoped


/*
if (3 > 2) {
    var message = 'The condition is true';
}

console.log(message);
*/


// let and const block scoped


/*
if (3 > 2) {
    let message = 'The condition is true';
}

console.log(message);
*/



/*
if (3 > 2) {
    const message = 'The condition is true';
}

console.log(message);
*/

/******************
Template Literals
*/

/*
const greeting = `Hello World!`;
console.log(greeting);
*/

/*
const firstName = `Adam`;
const lastName = `Williams`;
const age = 25;

console.log(`My name is ${firstName} ${lastName} and I am ${age} years old.`);
*/


/*******************
Default Parameters
*/


/*
function greeting(name = 'Stranger') {
    console.log(`Hello, ${name}`);
}

greeting('Jane');

*/

/********************
Arrow Functions
*/


/*
const greeting = function() {
    console.log(`Good morning!`);
}
*/

/*
const greeting = () => {
    console.log(`Good morning!`);
}

greeting();
*/

/*
const multiply = (a, b) => {
    console.log(a * b);
}

multiply(5, 10);
*/































