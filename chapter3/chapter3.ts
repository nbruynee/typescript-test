// lesson 20
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
