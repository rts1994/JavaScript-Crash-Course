/********************
Function Declarations
*/

/*function reminder() {
    console.log('Remember to eat your fruits and vegetables');
}

reminder();*/

/*
function distance(speed, time) {
    console.log(speed * time);
}

distance(50, 2);
distance(60, 3);

*/

/********************
Function Expressions
*/

/*var distance = function(speed, time) {
    console.log(speed * time);
}

distance(50, 2);
distance(60, 3);*/

/*******************
Return Statement
*/

/*
function distance(speed, time) {
   return speed * time;
}

var distance1 = distance(50, 2);
var distance2 = distance(60, 3);

if (distance1 > distance2) {
    console.log('distance 1 is greater than distance 2');
} else {
    console.log('distance 2 is greater than or equal to distance 1');
}
*/


/******************
Scoping
*/

//var greeting = 'Hi';

/*
function change() {
    var greeting = 'Hello';
    console.log(greeting);
}

console.log(greeting);

*/


/******************
Hoisting
*/

/*distance(50, 2);

function distance(speed, time) {
   console.log(speed * time);
}*/

/*
distance(50, 2);

var distance = function(speed, time) {
    console.log(speed * time);
}
*/

/*
var greeting;

console.log(greeting);
greeting = 'Hi';
*/

/***************
Exercise 6
*/

/*
Tom has a weight of 75.5kg and a height of 1.74m. Adam has a weight of 81.2kg and has a height of 1.88m. 

The formula for BMI is:

BMI = weight / height * height
Where weight is in kg and height is in m.

Create a function that accepts two arguments, weight and height, and returns the BMI. Calculate the BMI of both Tom and Adam using the function and store them in variables. Log to the console their BMI's.
*/

/*
function calcBMI(weight, height) {
    return weight / (height * height);
}

var tomBMI = calcBMI(75.5, 1.74);
var adamBMI = calcBMI(81.2, 1.88);

console.log(tomBMI);
console.log(adamBMI);
*/

/****************
Exercise 7
*/

/*
Ben went to three different restaurants in the past week. The first restaurant gave him a bill of $58. The second restaurant gave him a bill of $22. The third restaurant gave him a bill of $104. 

Ben usually tips depending on the amount of the bill. If the bill is less than $50, he tips 10%. If the bill is between 50 and 100 inclusive, he tips 15%. Finally, if the bill is over $100, he tips 20%. 

Create a function called tipCalculator that accepts one argument and returns the tip amount based on the conditions mentioned and calculate the tip amounts that Adam has to pay for each bill. 
*/

/*
function tipCalculator(bill) {
    var tipPercentage;
    if (bill < 50) {
        tipPercentage = 0.1;
    } else if (bill >= 50 && bill <= 100) {
        tipPercentage = 0.15;
    } else {
        tipPercentage = 0.2;
    }
    return tipPercentage * bill;
}

console.log(tipCalculator(104));
*/


/****************
Exercise 8
*/

/*
A local school in your area is having their end of year examinations. All examinations are based on a score out of 100. You have been asked to write a simple program that can accept a test score and output a letter grade. The grading scheme is as follows:

A = 90-100
B = 75-89
C = 60-74
D = 50-59
F = 0-49

Create a function that accepts a test score as an argument and returns a letter grade based on the score.
*/

/*
function grade(score) {
    var letterGrade; 
    if (score >= 90) {
        letterGrade = 'A';
    } else if (score >= 75 && score <= 89) {
        letterGrade = 'B';
    } else if (score >= 60 && score <= 74) {
        letterGrade = 'C';
    } else if (score >= 50 && score <= 59) {
        letterGrade = 'D';
    } else {
        letterGrade = 'F';
    }
    return letterGrade;
}

console.log(grade(39));
*/


/****************
Exercise 9
*/

/*
Create a function called dice that takes in no arguments. This function should return a random number between 1 and 6. 

Call the dice function twice and store them in variables called dice1 and dice2. 

Write a conditional statement that logs to the console the value of each die and which die has the greater value. 

You will have to google how to generate a random number between 1 and 6 and how to round the number so you get a whole number each time. 
*/

/*
function dice() {
    return Math.ceil(Math.random() * 6);
}

//console.log(dice());

var dice1 = dice();
var dice2 = dice();

console.log('Dice 1: ' + dice1);
console.log('Dice 2: ' + dice2);

if (dice1 > dice2) {
    console.log('Dice 1 is greater');
} else if (dice2 > dice1) {
    console.log('Dice 2 is greater');
} else {
    console.log('They are both the same');
}
*/

/******************
Exercise 10
*/

/*
Copy the code from the previous exercise and convert it into a function declaration, or a function expression, depending on what you had used earlier. 
*/


/*
var dice = function() {
    return Math.ceil(Math.random() * 6);
}

//console.log(dice());

var dice1 = dice();
var dice2 = dice();

console.log('Dice 1: ' + dice1);
console.log('Dice 2: ' + dice2);

if (dice1 > dice2) {
    console.log('Dice 1 is greater');
} else if (dice2 > dice1) {
    console.log('Dice 2 is greater');
} else {
    console.log('They are both the same');
}
*/

































