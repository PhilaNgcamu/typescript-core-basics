function printCoord(pt) {
    console.log(`The coordinates of x is ${pt.x}`);
    console.log(`The coordinates of y is ${pt.y}`);
}
printCoord({ x: 12, y: 88 });
function sanitizeInput(str) {
    return str;
}
let userInput = sanitizeInput(getInput());
