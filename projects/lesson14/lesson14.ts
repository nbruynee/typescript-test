// Enum (enumerated: list, one by one) is a group of constant values.
// eg: 
// STATUS = [ PENDING, SUCCESS, FAILED]
// To define an enum:
// - Use the keyword enum, and a 'name' for the enum
// - define the constant values
// enum name { constant1, constant2,...};

// string enum
enum API_STATUS {
    PEDDING = "PEDDING",
    FULFILLED = "FULFILLED",
    REJECTED = "REJECTED"
}

let a1 = API_STATUS.PEDDING;
let a2 = API_STATUS.REJECTED;

console.log("A1:", a1, "A2:", a2);
