let changingString = "Hello World";
//TypeScript interpretes it as let changingString: string;
changingString;
const constantString = "Hello World";
//TypeScript interpretes it as let changingString: "Hello World";
constantString;
let x = "Hello";
//Not this x = "World" or let x: "Hello = "World""
function printText(s, alignment) {
    console.log(`${s} ${alignment}`);
}
printText("Hello, world", "left");
printText("G'day, mate", "center");
//printText("G'day, mate", "centre"); would not work beacuse "center" is not the same as "center". "alignment" only accepts 3 arguments according string literal types.
function compare(a, b) {
    return a === b ? 0 : a > b ? 1 : -1;
}
function configure(x) {
    console.log(x);
}
configure({ width: 100 });
configure("auto");
