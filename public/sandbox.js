"use strict";
// let greet:Function;
//Example 1
let greet;
greet = (name, greeting) => {
    console.log(`${name} says ${greeting}`);
};
//Ex 2
let calc;
calc = (numOne, numTwo, action) => {
    if (action === 'add') {
        return numOne + numTwo;
    }
    else {
        return numOne - numTwo;
    }
};
//Ex 3
let logDetails;
logDetails = (ninja) => {
    console.log(`${ninja.name} is ${ninja.age} years old`);
    return -1;
};
