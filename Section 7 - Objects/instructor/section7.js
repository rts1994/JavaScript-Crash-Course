/*****************
Objects
*/

/*
var car = {
    make: 'Audi A8',
    model: 2020,
    color: 'black',
    'fuel type': 'petrol'
}

//console.log(car.make);
console.log(car['fuel type']);
*/


/****************
Assigning Properties and Adding Methods to Objects
*/

/*
var car = {
    make: 'Audi A8',
    model: 2020,
    color: 'black',
    'fuel type': 'petrol',
    message: function() {
        console.log('This is the latest model with the sleekest design')
    }
}
*/

//console.log(car);

/*car.engine = 'V8';*/
//console.log(car.engine);
//console.log(car);

/*car.color = 'silver';
console.log(car);*/

/*
car.message();
*/

/*******************
Nested Objects
*/

/*var car = {
    details: {
        make: 'Audi A8',
        model: 2020,
        color: 'black',
    },
    'engine and transmission': {
        type: 'V8',
        'fuel type': 'petrol',
        transmission: 'automatic',
    },
    safety: {
        locks: 'child-safety locks',
        brakes: 'anti-lock braking system',
        noOfAirbags: 8
    }
    
}

//console.log(car['engine and transmission'].transmission);

console.log(car);*/


 /******************
 This Keyword
 */

/*var menu = {
    appetizer: 'caesar salad',
    main: 'steak',
    dessert: 'cheesecake',
    order: function() {
        console.log('I would like to start with a ' + this.appetizer + ' followed by a ' + this.main + ' and finally ' + this.dessert + ' for dessert');
    }
}

menu.order();*/


/***********************
Exercise 16
*/

/*
Adam and Ben played 3 rounds of basketball against each other. Adam scored 51, 35 and 50 points while Ben scored 50, 37 and 49 points. 

1) Create two objects, one named adam and the other named ben
2) Add a property called scores in each object and enter the scores of each player as an array.
3) Create a method that will return the average score of the 3 rounds.
4) Log to the console the winner of the 3 rounds, based on the average scores you calculated. 
*/

/*
var adam = {
    scores: [52, 36, 51],
    calcAverage: function() {
        var x = 0;
        for (var i = 0; i < this.scores.length; i++) {
            x = x + this.scores[i];
        }
        return Math.round(x / this.scores.length);
    }
}

var ben = {
    scores: [60, 37, 49],
    calcAverage: function() {
        var x = 0;
        for (var i = 0; i < this.scores.length; i++) {
            x = x + this.scores[i];
        }
        return Math.round(x / this.scores.length);
    }
}

var adamAverage = adam.calcAverage();
var benAverage = ben.calcAverage();

if (adamAverage > benAverage) {
    console.log('Adam wins with an average score of ' + adamAverage + ' points');
} else if (benAverage > adamAverage) {
    console.log('Ben wins with an average score of ' + benAverage + ' points');
} else {
    console.log('The scores are tied with an average score of ' + adamAverage);
}
*/



