let addNumberOrString = (a: any, b: any) => {
    if (typeof a === 'number' && typeof b === 'number') {
        return a + b;
    }
    if (typeof a === 'string' && typeof b === 'string') {
        return a.concat(b);
    }
    throw new Error('Parametersmustbenumbersorstrings');
}

// addNumberOrString(true, [1,2,3])
// If a, b are both numbers => calculate the sum of 2 numbers a and b
// If a, b are both strings => add strings (concatenate(nối chuỗi) strings)
// If a, b are not numbers or strings => report an error
// If we pass:
// addNumberOrString(true, [1,2,3])
// => typescript compiles the code without error (due to any data type)
// => run the code and there will be an error (throw error)
// => Solution: do not use any data type

// union type a: number | string
let addNumberOrString1 = (a: number | string, b: number | string) => {
    if (typeof a === 'number' && typeof b === 'number') {
        return a + b;
    }
    if (typeof a === 'string' && typeof b === 'string') {
        return a.concat(b);
    }
    throw new Error('Parametersmustbenumbersorstrings');
}

// When passing parameters such as boolean, an error will be reported.
// a = 10;//ok
// a = 'abc';//ok
// a = true; //error

// addNumberOrString1(1, 2)
