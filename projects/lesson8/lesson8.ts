// let a = 9.69; typeof === number
// Typescript (or JS) does not have the concept(khái niệm) of data type (datatype) 
//  such as float or int, double... only has the Number type (displaying numbers)
let test1: number = 9.6;

test1 = 999; // ok because init data-type is number  
console.log("Test 1:", test1)
// test1 = "abc" // err: Type 'string' is not assignable to type 'number'

// const a1: number; // err: 'const' declarations must be initialized.
let test2: number;
test2 = 100;
console.log("Test 2:", test2)

// let and var can be used with type annotations without initialization.
// const must be initialized when declared — you cannot just specify the type.