// primitive(nguyên thủy) data-type
// let count2: number; //ok

// let count2: number = 1; //sử dụng khai báo type và init value

// count2 = 10;
// count2 = "abc"; // err: Type 'string' is not assignable to type 'number'

// console.log(">>Check count 2:", count2);


// References(tham chiếu) data types
// let arrayName: type[];
let names: string[] = ['Bruyne', 'Long', 'Phong'];
// names.push(25); // err
names.push("25");
console.log(">>>Check arr: ", names);
