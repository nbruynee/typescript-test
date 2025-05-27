const sum = (a:number, b: number) : number => {
    return a + b;
} 

const handleLogs = (message: string) : void => {
    console.log("check message: ", message)
}

// + If 'any' Type (no matter what to return, whatever), then 'void' type
// will not return any value.
// + Usually used to refer to 'a function' that does not return a value
// Benefits of using void Type:
// + Makes the code in the function clearer, when we do not need to "search for" 
// the return keyword