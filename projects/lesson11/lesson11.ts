// Object Data Type
// Typescript's object data type, which represents(tượng chưng) all data that is
//  NOT a primitive data type, includes: string, number, boolean, null, undefined,
//  bigint, symbol.


let pro1: {
    name: string,
    age: number 
}

pro1 = {
    name: "Bruyne",
    age: 22
}


// code shorter:
let pro2: {
    name: string,
    age: number 
} = {
    name: "King",
    age: 20
}

// pro1.address = "HCMC" // err: Property 'address' does not exist on type '{ name: string; age: number; }

console.log("Check pro1:", pro1);
console.log("Check pro2:", pro2);