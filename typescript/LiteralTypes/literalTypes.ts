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

