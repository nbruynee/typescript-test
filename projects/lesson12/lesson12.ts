// To define an "array" type, use the syntax:
// let arrayName: type[ ];

// let skills: string[ ]; // define array "strings"
let name4: string[] = ["Lovoe"]
console.log("Check name4: ", name4)

// skills[0] = "ABC";
// skills[1] = 69; //error
// skills.push("DEF"); //ok

// let scores = ['Programming', 5, 'Software Design', 4];
// =>TS will guess whether the type is string or number
// encourage
// let scores : (string | number)[ ] = ['Programming', 5, 'Software Design', 4];
let test3: (number | string)[] = ["Bruyne ne", 22];

test3.push("King kevin")
test3.push(30)
console.log("Check test 3", test3);