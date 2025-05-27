// Normal declaration type
let skills: (string | number)[] = ["Bruyne", 22]
console.log("Check skill:", skills);
// declaration type use tulip
let skills1: [string, number] = ["Bruyne ne", 23]
// If you use tulip and declare it in the wrong order, it will give an error.
// let skills2: [string, number] = [23, "Bruyne ne"]
console.log("Check skill:", skills1);
// "Tuple": a structure of data that has several(nhiều) parts
// Definition
// Works(hoạt động) like Array, however, there are a few additional mandatory
// (bắt buộc) rules:
// - The number of elements of the tuple must be declared in advance (fixed)
// - The type of each element in the array must be declared in advance, and does not
// have to be the same

// eg: let skills = ['Languages', 5];
// =>
// let skills : [string, number] = ['Languages', 5];
// - With tuples, the order of the elements is IMPORTANT.
// let skills : [string, number];
// skills = [5, 'Languages']; //error eg in practice:
// let color: [number, number, number] = [255, 0, 0];

let skills2 : [string, number, boolean?];
skills2 = ["Bruynee", 24, true];
// skills2 = ["Bruynee", 24];
console.log("Check skill 2:", skills2);
// + ? makes a tuple element optional. Optional elements must be at the end of the tuple.
// You can provide or omit(bỏ qua) them during assignment
// + This is a design choice to avoid ambiguity(mơ hồ, không rõ ràng) in tuple 
// length and types.
// + This is disallowed because if the first element is missing, TypeScript wouldn’t 
// know if the single value is meant for(dành cho) the first or second slot.
// + Optional Tuple Elements
// let bgColor, headerColor: [number, number, number, number?];
// bgColor = [0, 255, 255, 0.5];
// headerColor = [0, 255, 255];