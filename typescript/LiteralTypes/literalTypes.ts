let changingString = "Hello World";
//TypeScript interpretes it as let changingString: string;
changingString;

const constantString = "Hello World";
//TypeScript interpretes it as let changingString: "Hello World";
constantString;

let x: "Hello" = "Hello"
//Not this x = "World" or let x: "Hello = "World""

function printText(s: string, alignment: "left" | "center" | "right") {
    console.log(`${s} ${alignment}`)
}

printText("Hello, world", "left");
printText("G'day, mate", "center");
//printText("G'day, mate", "centre"); would not work beacuse "center" is not the same as "center". "alignment" only accepts 3 arguments according string literal types.

function compare(a: string, b: string): -1 | 0 | 1 {
    return a === b ? 0 : a > b ? 1 : -1
}

interface Options {
    width: number;
}

function configure(x: Options | "auto") {
    console.log(x)
}

configure({ width: 100 });
configure("auto");
// configure("automatic"); would not work as "x" parameter accepts the object passed or only "auto" which is the string literal type
