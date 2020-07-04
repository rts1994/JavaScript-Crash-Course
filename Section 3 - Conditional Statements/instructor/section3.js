/****************
If... else Statements
*/

/*
var thirsty = 'yes';

if (thirsty === 'yes') {
    console.log('Drink some water');
} else {
    console.log('Make sure you stay hydrated')
}
*/

/*var season = 'summer';

if (season === 'summer') {
    console.log('It is too hot outside');
} else if (season === 'winter') {
    console.log('It is too cold outside');
} else if (season === 'spring') {
    console.log('I love this weather')
} else {
    console.log('This weather is perfect')
}*/

/****************
Shorthand if... else statements
*/
/*

var thirsty = false;

if (thirsty === 'yes') {
    console.log('Drink some water!');
} else {
    console.log('Make sure you stay hydrated');
}

thirsty ? console.log('Drink some water') : console.log('Make sure you stay hydrated');
*/
/****************
Logical Operators in Conditions
*/

/*var temperatureCelcius = -5;

if (temperatureCelcius >= 20 && temperatureCelcius <= 30) {
    console.log('This weather is perfect');
} else if (temperatureCelcius >= 10 && temperatureCelcius < 20) {
    console.log('It is a bit chilly outside');
} else if (temperatureCelcius < 10) {
    console.log('It is really cold outside')
} else {
    console.log('It is really hot outside');
}*/

/*
var timeOfDay = 'afternoon';

if (timeOfDay === 'morning' || timeOfDay === 'afternoon') {
    console.log('I should go and get some exercise');
} else {
    console.log('I think it might be time to go to bed');
}
*/


/******************
Switch Statements
*/



/*if (season === 'summer') {
    console.log('It is too hot outside');
} else if (season === 'winter') {
    console.log('It is too cold outside');
} else if (season === 'spring') {
    console.log('I love this weather');
} else {
    console.log('This weather is perfect');
}*/

/*
var season = 'autumn';

switch (season) {
    case 'summer': 
        console.log('It is too hot outside');
        break;
    case 'winter':
        console.log('It is too cold outside');
        break;
    case 'spring':
        console.log('I love this weather');
        break;
    default:
        console.log('This weather is perfect');
        break;
}
*/

/****************
Exercise 4
*/

/*
Tom and Adam played 3 rounds of basketball against each other. Tom scored 51, 32 and 60 points, whereas Adam scored 44, 54 and 64 points. Calculate the average score of Tom and Adam and log to the console the winner. 

1) Store each score in a variable with a sensible name. 

2) Calculate the average of the three scores for each player and store the result in a variable.

3) Using an if... else statement or a switch statement, log to the console the winner based on the average scores. Remember, you need to account for a tie as well!
*/

/*
var tomScore1 = 70;
var tomScore2 = 50;
var tomScore3 = 60;

var adamScore1 = 70;
var adamScore2 = 50;
var adamScore3 = 60;

var tomAverageScore = (tomScore1 + tomScore2 + tomScore3) / 3;

var adamAverageScore = (adamScore1 + adamScore2 + adamScore3) / 3;

//console.log(tomAverageScore, adamAverageScore);

if (tomAverageScore > adamAverageScore) {
    console.log('The winner is Tom with an average score of ' + tomAverageScore);
} else if (adamAverageScore > tomAverageScore) {
    console.log('The winner is Adam with an average score of ' + adamAverageScore);
} else {
    console.log('The game is a tie with both players getting an average score of ' + tomAverageScore);
}

*/

/*****************
Exercise 5
*/

/*
Body mass index (BMI) is a measure of a person's weight compared to their height. The formula for BMI is:

BMI = weight / height * height
Where weight is in kg and height is in m.

Tom has a weight of 75.5kg and a height of 1.74m. Adam has a weight of 81.2kg and has a height of 1.88m. Calculate each of their BMI's and log to the console who has the higher BMI.

1) Store weights and heights of Tom and Adam in sensibly named variables.

2) Calculate each of their BMI's using the formula mentioned above and store them in separate variables.

3) Use a conditional statement to log to the console who has the higher BMI.
*/

/*
var tomWeight = 70;
var tomHeight = 1.80;

var adamWeight = 70;
var adamHeight = 1.80;

var tomBMI = tomWeight / (tomHeight * tomHeight);

var adamBMI = adamWeight / (adamHeight * adamHeight);

//console.log(tomBMI, adamBMI);

if (tomBMI > adamBMI) {
    console.log('Tom has a higher BMI, with a BMI of ' + tomBMI);
} else if (adamBMI > tomBMI) {
    console.log('Adam has a higher BMI, with a BMI of ' + adamBMI);
} else {
    console.log('Tom and Adam have the same BMI of ' + tomBMI);
}
*/





















