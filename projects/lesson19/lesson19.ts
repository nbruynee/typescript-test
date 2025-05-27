// Type aliases allow us to create new types of existing types.
// Syntax: type alias = existingType;
type bruyneType = number | string | object | boolean; 
let addNumberOrString2 = (a: bruyneType, b: number | string) => {
    if (typeof a === 'number' && typeof b === 'number') {
        return a + b;
    }
    if (typeof a === 'string' && typeof b === 'string') {
        return a.concat(b);
    }
    throw new Error('Parametersmustbenumbersorstrings');
}

addNumberOrString2('Check ', 'Bruyne');
// existingType is all the 'valid' types of TypeScript, such as string, number, 
// boolean... For example:
// type ky_tu = string;
// let message: ky_tu;// same as string type
// Using aliases is very useful with union types:
// before:
// let myVar: string | number | boolean = 'just a test';
// myVar = { abc: 'def' }; // error
// after:
// type superType = string | number | boolean;
// let myVar: superType = 'just a test';