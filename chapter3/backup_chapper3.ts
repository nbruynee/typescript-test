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

// -------------------------------------------------------------------------------------//
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

// -------------------------------------------------------------------------------------//
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
// -------------------------------------------------------------------------------------//
// chapter 24: do..while
// 1. Syntax
// do {
//     do something
// } while (condition);
let counter2 = 1;
do {
    console.log(counter2);
    if (counter2 % 2 === 0) break;
    counter2++;
} while (counter2 < 5)
// 2. Difference between do...while and while
// - do...while always runs at least once
let i2 = 20;
do {
    console.log(">>> i= ", i2);
    i2++;
} while (i2 < 10);

// -------------------------------------------------------------------------------------//
// lesson 25: break 
// We can use keyword break inside for, while and do..while loops
// use keyword break inside for  
let products = [
    { name: 'phone', price: 700 },
    { name: 'tablet', price: 900 },
    { name: 'laptop', price: 1200 }
];

for (let e = 0; e < products.length; e++) {
    if (products[e].price == 900) {
        break;
    }
    console.log(products[e].name);
}


// use keyword break inside switch...case
let products1 = [
    { name: 'phone', price: 700 },
    { name: 'tablet', price: 900 },
    { name: 'laptop', price: 1200 }
];
let discount1 = 0;
let product = products1[1];
switch (product.name) {
    case 'phone':
        discount1 = 5;
        break;
    case 'tablet':
        discount1 = 10;
        break;
    case 'laptop':
        discount1 = 15;
        break;
    default : discount1 = 100;
}
console.log(`There is a ${discount1}% on ${product.name}.`);


// without use break in switch...case
let products2 = [
    { name: 'phone', price: 700 },
    { name: 'tablet', price: 900 },
    { name: 'laptop', price: 1200 }
];
let discount2 = 0;
let product1 = products1[1];
switch (product.name) {
    case 'phone':
        discount2 = 5;
        break;
    case 'tablet':
        discount2 = 10;
        // break;
    case 'laptop':
        discount2 = 15;
        // break;
    default : discount2 = 100; // result this block code = 100
}
console.log(`There is a ${discount2}% on ${product.name}.`);
// When a switch case in JavaScript omits(bỏ qua) the break statement, 
// the execution flow "falls through(rơi qua)" to the next case, regardless (bất kể) 
// of whether the subsequent(tiếp theo) case's condition matches(khớp) the switch 
// expression(biểu thức). This behavior continues until a break statement or 
// the end of the switch block is encountered(gặp phải).
// -------------------------------------------------------------------------------------//
// chapter 26: TypeScript continue 
// Similar to break, continue is used in for, while and do...while loops
// If break is used to end the 'whole' loop, continue signals to skip 
// the 'first run' of the loop body. The loop does not execute that run,
//  but continues to run the next run.
// use keyword continue with loop for 
for (let index = 0; index < 9; index++) {
    // if index is odd,skip it 
    if (index % 2 === 1) {
        continue;
    }
    // the following code will be skipped for odd numbers 
    console.log(index);
}

// use keyword continue with loop while 
let index = -1;
while (index < 9) {
    index = index + 1;
    if (index % 2)
        continue;
    console.log(index);
}

// use keyword continue with loop do..while 
let index1 = 9;
let count1 = 0;
do {
    index += 1;
    if (index % 2) {
        continue;
    }
    count1 += 1;
} while (index1 < 99);
console.log(count1); //45
// -------------------------------------------------------------------------------------//
// lesson 27: functions typescript
// type declare of js 
// function sum2(a, b) {
//     return a + b;
// }

function sum1(a: number, b: number) {
    return a + b;
}

// anonymous function () => {}
const sum5 = (a: number, b: number) => {
    return a + b;
}

console.log(">>Check sum: ", sum1(6, 9))
// -------------------------------------------------------------------------------------//
