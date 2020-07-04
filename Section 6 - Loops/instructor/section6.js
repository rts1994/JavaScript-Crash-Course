/******************
For Loops
*/

//i++ = i = i + 1

/*for (var i = 0; i <= 10; i++) {
    console.log(i);
}*/

/*for (var i = 10; i >= 0; i--) {
    console.log(i);
}*/

/******************
Looping Through Arrays
*/

/*for (var i = 1; i >= 10; i++) {
    console.log(i);
}*/

/*var hobbies = ['coding', 'hiking', 'reading', 'travelling', 'music', 'sports'];

//hobbies[1] = hiking

for (var i = 0; i < hobbies.length; i++) {
    console.log(hobbies[i]);
}*/


/******************
While Loops
*/

/*for (var i = 1; i <= 10; i++) {
    console.log(i);
}*/

/*var i = 1;
while (i <= 10) {
    console.log(i);
    i++
}*/

/**********************
Exercise 12
*/

/*
FizzBuzz Challenge

FizzBuzz is a simple programming task that is common during developer job interviews. In this exercise, log the numbers 1-100 to the console. However, if the number is divisible by 3, log 'Fizz' instead of the number and if the number is divisible by 5 then log 'Buzz' instead of the number. If the number is divisible by both 3 and 5 then log 'FizzBuzz' instead of the number.   
*/

/*
for (var i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log('FizzBuzz');
    } else if (i % 3 === 0) {
        console.log('Fizz');
    } else if (i % 5 === 0) {
        console.log('Buzz');
    } else {
        console.log(i);
    }
}
*/

/***********************
Exercise 13
*/

/*
Copy the following array:

var sentence = ['backwards.', 'written', 'is', 'sentence', 'This'];

Create a function that will accept an array as an argument and returns a new array in reverse order. 

NOTE: When you use the return statement in a loop, the loop automatically ends and does not iterate through all the elements. You need to first iterate through the array then return the new array. 
*/

/*
var sentence = ['backwards.', 'written', 'is', 'sentence', 'This'];

function reverseArray(arr) {
    var reverse = [];
    for (var i = arr.length - 1; i >= 0; i--) {
        reverse.push(arr[i]);
    }
    return reverse;
}

console.log(reverseArray(sentence));
*/

/**********************
Exercise 14
*/

/*
Copy the following arrays:

var groceries1 = ['bananas', 'apples', 'oranges', 'pears', 'mangoes', 'watermelons', 'grapes'];
var groceries2 = ['watermelon', 'peaches', 'guava', 'lemons', 'apples', 'apricots', 'oranges'];

Create a function that will accept two arrays as arguments. The function should compare the two arrays and return the values that are present in both arrays. The matched values should be stored in a new array. 
*/

/*
var groceries1 = ['bananas', 'apples', 'oranges', 'pears', 'mangoes', 'watermelons', 'grapes'];

var groceries2 = ['watermelon', 'peaches', 'guava', 'lemons', 'apples', 'apricots', 'oranges'];

function matchingValues(arr1, arr2) {
    var match = [];
    for (var i = 0; i < arr1.length; i++) {
        for (var x = 0; x < arr2.length; x++) {
            if (arr1[i] === arr2[x]) {
                match.push(arr1[i]);
            }
        }
    }
    return match;
}

console.log(matchingValues(groceries1, groceries2));
*/

/***********************
Exercise 15
*/

/*
Create a loop that will iterate from 1-20 in reverse order. For each iteration, display the number on the console and whether the number is odd or even. 
*/


/*
for (var i = 20; i >= 1; i--) {
    if (i % 2 === 0) {
        console.log(i + ' is even');
    } else {
        console.log(i + ' is odd');
    }
} 
*/




















































































