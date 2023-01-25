let changingString = "Hello, World";// where the type of "changingString" is string for any possible string due to "let"
changingString;

const constantString = "Hello, World" // where the type of "constantString" is "Hello, World" ONLY! beacuse of "const"(you cannot reassign the variable)

let x: "hello" = "hello"; //where "hello" is the literal string to be assigned to x (the only possible)
//The following is an error becuse x is the literal type of "hello" only:
//x = "World";

function printText(s: string, alignment: "left" | "right" | "center") {
    console.log(`Align this text, "${s}" to ${alignment}`);
} //where, "s" accepts any possible string type & "alignment" only accepts "left", "right" and "center" types
printText("Nice one, Phila", "left")
//But there will be an error is alignment has an invalid type
//printText("Nice one, Phila", "bottom")


//The function below should return a number type based on two string comparisons
function compare(a: string, b: string): -1 | 0 | 1 {
    return a === b ? 0 : a > b ? 1: -1  
}

console.log(compare("a", "b"));

//Combine literal types with non-literal Types

interface Options {width: number;}//Object type

function configure(x: Options | "auto" | 5) {
    console.log(x);  
}//where, Options is a non-literal type except, "auto" & 5
configure({width: 550})
//The error here will be: configure("automatic"); configure(6)

//Literal Inference:
const obj = {counter: 0}// where the object property is a "number" type for any possible numbers
obj.counter = 4;

declare function handleRequest(url: string, method: "GET" | "POST"): void;

//The "req" object has properties, "url" & "method" with type "string", not a literal type.
//To turn this object to have literal type properties use "as const" (this concept is called Literal Inference)
const req = { url: "https://example.com", method: "GET"} as const

handleRequest(req.url, req.method)


