// lesson 20 - (condition: if...else)
let name123: string = "Bruyne";

// if (age > 18) {
//     console.log("You can watch this movie")
// }
// else {
//     console.log("Oops! something wrong , please get out this page")
// }

// in this case if age = 0 its value is false it will return the else part, 
// but if age > 0 it will return true
if (name123) {
    console.log("You can watch this movie")
}
else {
    console.log("Oops! something wrong , please get out this page")
}

// similarly, string, if name123 is declared empty,
// it will return false, and if it is declared, it will return true.

let discount: number;
let itemCount = 17;
if (itemCount > 0 && itemCount <= 5) {
    discount = 5;
} else if (itemCount > 5 && itemCount <= 10) {
    discount = 10;
}
else if (itemCount > 15 && itemCount <= 20) {
    discount = 20;
}
else {
    discount = 15;
}
console.log(`You got ${discount}% discount.`);

// lesson 21: (Switch-case)

// Syntax
// switch ( expression){ 
// case value 1: 
//  statement1 
// break; 
// case value 2: 
//  statement2 
// break; 
// case value N: 
//  statement N 
// break; 
// default: 
// break; 
// }
// example:
let age: number = 19;
switch (age) {
    case 20:
    case 19:
        console.log("I am a student")
        break;
    case 18:
        console.log("I just graduated from high school")
        break;
    case 14:
    case 13:
    case 12:
        console.log("I am in secondary school")
        break;
    default:
        console.log("Your age is not fit")
        break;
}

// + switch... case will calculate the value of 'expression'.
// + It will find the first 'case' that satisfies(thoả mãn) expression
// (value1,value2,...,value N) 
// switch... case will execute "only" - the case whose value satisfies in case there
// is no case that satisfies => default value will be used break keyword 
// ensures that 'only' 1 case is executed

let targetId = 'btnUpdate';
switch (targetId) {
    case 'btnUpdate':
        console.log('Update');
        break;
    case 'btnDelete':
        console.log('Delete');
        break;
    case 'btnNew':
        console.log('New');
        break;
}

// example of group case: (waterfall)

//change the month and year
let month = 2,
    year = 3000;
let day = 0;
switch (month) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
        day = 31;
        break;
    case 4:
    case 6:
    case 9:
    case 11:
        day = 30;
        break;
    case 2:
        if (((year % 4 == 0) &&
            !(year % 100 == 0))
            || (year % 400 == 0))
            day = 29;
        else
            day = 28;
        break;
    default:
        throw Error('Invalid month');
}
console.log(`Themonth ${month} in ${year} has ${day} days`);

//lesson 23: Loop for 
// 1. Syntax for loop
// We can use if/else switch/case, however, with loop, it helps the code shorter and execute multiple times
// for(initialization;condition;expression){
// //statement
// }
// + initialization: initial value (input) of the loop
// + condition: condition to execute the loop. If the Condition is true,
// the code block will be executed. Otherwise, when condition = false,
// the loop will be used (no more code execution)
// + expression: used to update the loop. Each time the loop is run,
// the code block in the body is executed to the end, then
// the expression will be run to prepare for the next run//
// 2. Example
// recommend should this type
// for(initialization; condition; expression);
for (let i = 0; i < 10; i++) {
    console.log(">> i= ", i);
}
// initialization: i = 0
// condition: i < 10
// expression: i++
// - We initialize the variable i with the value = 0: i = 0
// Then, check the condition: i < 10 or not.
// If i < 10, then console.log the value
// At the same time, execute the expression: i++ to increase i by 1 unit
// Execute until the condition is no longer(còn được) satisfied
// 3. optional block
// - Note that you should not use abbreviations(viết tắt), do not write like
// 'challenge your friend to write'. How can you be sure that 'now you write code
//  you understand, 1 month later come back, will you understand :v'
let i1 = 0;
for (; i1 < 10; i1++) {
    console.log(i1);
}

for (let i2 = 0; ; i2++) {
    console.log(i2);
    if (i2 > 9) break; // need if/break to not make(khiến) the loop run infinitely
}

let i3 = 0;
for (; ;) {
    console.log(i3);
    i3++;
    if (i3 > 9) break;
}

// Introduction to while loop
// Similar to for, while loop helps us to write code differently 'if/else', switch/case
// - If with for loop, we will know how many times 'should run' the loop 
// (a specific number), then with while, we can run with an unknown number of times.
// syntax declare:
// while (condition){
//   do something
// }

// If condition = true => execute the code block, else.. do nothing
// - To exit the loop (because by default the loop will run indefinitely), 
// we need to use the keyword break;
// while(condition){
// //do something
// // ...
// if(anotherCondition)
// break;
// }
// 2. example
let counter = 0;
while (counter < 5) {
    console.log(counter);
    counter++;
}
// This code would be no different using a for loop.
// example 2:
let counter1 = 1;
while (counter1 < 5) {
    console.log(counter1);
    if (counter1 % 2 === 0) break;
    counter1++;
}