let count: string = "Bruyne dinh cao"

console.log(">>Check count 0 = ", count)

let test = ['eric', "bruyne", 'dinh', 21];
test.push(20);

console.log("Check test: ", test)
// Type inference vs. Type annotations
// Type inference: TS will "guess" the data type based on its "algorithm" 
// Type annotations: defines "exact coercion(sự ép buộc)" of the data type

// When to use Type inference: When do you want to?
// Use Type annotations when:
// - Declare a variable and assign a value to it immediately
// - Declare a variable => cast the type (don't want to be automatically assigned)
// - Want to cast the type to return the desired value