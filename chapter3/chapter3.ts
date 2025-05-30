// Lesson 33: Classes 
// With javascript, the concept(khái niệm, ý tưởng) of 'class' is not exactly
// the same as other languages, for example C# and Java
// To create a class, we can use the following method: (with versions before ES6)
// function Person(ssn, firstName, lastName) {
// this.ssn = ssn;
// this.firstName = firstName;
// this.lastName = lastName;
// }
// Person.prototype.getFullName = function () {
// return `${this.firstName}${this.lastName}`;
// }
// https://www.w3schools.com/js/js_object_prototypes.asp
// --
// to use:
// let person = newPerson('171-28-0926', 'John', 'Doe');
// console.log(person.getFullName());
// with ES6, we can use keyword 'class'
// class Person {
// ssn;
// firstName;
// lastName;
// constructor(ssn, firstName, lastName) {
// this.ssn = ssn;
// this.firstName = firstName;
// this.lastName = lastName;
// }
// getFullName() {
// return `${this.firstName} ${this.lastName}`;
// }
// }
// //use
// let person = new Person('171-28-0926', 'John', 'Doe');
// console.log(person.getFullName());
// Use with typescript
// class Person {
// ssn: string;
// firstName: string;
// lastName: string;
// constructor(ssn: string, firstName: string, lastName: string) {
// this.ssn = ssn;
// this.firstName = firstName;
// this.lastName = lastName;
// }
// getFullName(): string {
// return `${this.firstName}${this.lastName}`;
// }
// }