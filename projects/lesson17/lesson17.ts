let handleException = (errorMessage: string): never => {
    throw Error(errorMessage);
};

let runInfinity = (): never => {
    console.log("Running inside runInfinity");
    while (true) {
        // console.log("Running....")
    }
    console.log("Running outside runInfinity");
}

// handleException("Throw error here");
let a = runInfinity()
console.log("Check a:", a);

// + Any: returns anything (applies to functions and variables)
// + Void: does not need to return data (actually still returns :v),
// does not need keyword return (applies mainly to functions)
// + Never: 'never' returns a value. promise !
// The 'never' data type is used when we are 'sure' that something will never happen.
// (no need to return a result, like void???)
// For example:
// - 1 function handle Exception (handle error):
// function throwError(errorMessage: string): never{
// throw new Error(errorMessage);
// }
// - 1 function runs without stopping :v
// function doingForever() : never{
// while(true){
// console.log("I'm always running..."); }
// }
// =>never type is used to 'indicate'(ám chỉ):
// a value that will never occur (example of exception error) or a value that
// will never be returned (example of infinity loop)
// 2. Distinguish(phân biệt) Never and Void
// when using void for function, it actually returns 'undefined' :v
// function logging(): void{
// console.log("Server logging...");
// }
// let check: void= logging();
// console.log(">>>check: ",check); //undefined