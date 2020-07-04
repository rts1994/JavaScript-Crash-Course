/***************
Arrays
*/

/*var groceries1 = 'bananas';
var groceries2 = 'apples';
var groceries3 = 'oranges';*/
/*
var groceries = ['bananas', 'apples', 'oranges'];*/

/*console.log(groceries);*/

/*var person = ['Adam', 'Jackson', 31];*/

/*
console.log(person);
*/


/*******************
Accessing and Replacing Elements and IndexOf Method
*/


/*
var groceries = ['bananas', 'apples', 'oranges'];

//console.log(groceries[4]);

groceries[1] = 'watermelons';
console.log(groceries);

console.log(groceries.indexOf('oranges'));
*/

/*******************
Length Property
*/

/*
var groceries = ['bananas', 'apples', 'oranges', 'pears', 'mangoes', 'watermelons', 'grapes'];

console.log(groceries.length);
*/


/*********************
Push and Pop Functions
*/

/*
var groceries = ['bananas', 'apples', 'oranges'];

groceries.push('peaches', 'pears');
console.log(groceries);

groceries.pop();
console.log(groceries);
*/


/**********************
Shift and Unshift Functions
*/

/*var groceries = ['bananas', 'apples', 'oranges'];*/

/*groceries.shift();
console.log(groceries);*/

/*groceries.unshift('papayas', 'grapes');
console.log(groceries);*/

/**********************
Splice Function
*/

/*
var groceries = ['bananas', 'apples', 'oranges'];

groceries.splice(1, 0, 'grapes');
console.log(groceries);

groceries.splice(1, 1, 'grapes');
console.log(groceries);
*/


/*********************
Exercise 11
*/

/*
Adam went to three different restaurants in the past week. The first restaurant gave him a bill of $88. The second restaurant gave him a bill of $42. The third restaurant gave him a bill of $104. 

Adam usually tips depending on the amount of the bill. If the bill is less than $50, he tips 25%. If the bill is between 50 and 100 inclusive, he tips 22.5%. Finally, if the bill is over $100, he tips 20%. 

1) Store the three bills in an array. 

2) Use the Tip Calculator from exercise 7 and amend it to reflect the different tipping conditions mentioned. 

3) Calculate the tips and store them in an array called tipAmounts.

4) Adam also wants to calculate the final amount that he has to pay including tips for each bill. Calculate the final amounts and store them in an array called totalAmounts. 
*/

/*
var bills = [88, 42, 104];

function tipCalculator(bill) {
    var tipPercentage;
    if (bill < 50) {
        tipPercentage = 0.25;
    } else if (bill >= 50 && bill <= 100) {
        tipPercentage = 0.225;
    } else {
        tipPercentage = 0.2;
    }
    return tipPercentage * bill;
}
*/

/*var tipAmounts = [tipCalculator(bills[0]), tipCalculator(bills[1]), tipCalculator([bills[2]])];

var totalAmounts = [tipAmounts[0] + bills[0], tipAmounts[1] + bills[1], tipAmounts[2] + bills[2]];

console.log(tipAmounts);
console.log(totalAmounts);*/

/*
var tipAmounts = [];
var totalAmounts = [];

tipAmounts.push(tipCalculator(bills[0]));
tipAmounts.push(tipCalculator(bills[1]));
tipAmounts.push(tipCalculator(bills[2]));

totalAmounts.push(tipAmounts[0] + bills[0]);
totalAmounts.push(tipAmounts[1] + bills[1]);
totalAmounts.push(tipAmounts[2] + bills[2]);

console.log(tipAmounts);
console.log(totalAmounts);
*/
































