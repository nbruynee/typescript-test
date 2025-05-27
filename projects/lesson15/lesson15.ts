// + Sometimes we use variables to store values, but are not sure about 
// the data types of those variables. In this case, we want to avoid 
// the typescript compiler reporting errors when compiling the code 
// (due to random data-type assignment :D) => use 'any' type
// When to use any type
// - With any type, we signal the compiler to 'not check' the data-type
// - Migrate from js project to typescript
let name5: any = "Bruyne";

name5 = 22;
name5 = true
// + when you declare a variable with the any type in TypeScript, you lose
// all type safety and autocomplete support (like method suggestions for
// slice, push, etc.).