//Declare the the type alias named "Point" (object type)
type Point = {x: number, y: number};

function printCoord(pt: Point) {
    console.log(`The coordinates of x is ${pt.x}`);
    console.log(`The coordinates of y is ${pt.y }`)
}

printCoord({x: 12, y:88})

type UserInputSanitizedString = string | number;

declare function getInput(): string;
declare function sanitize(): string;

function sanitizeInput(str: string): UserInputSanitizedString {
    return str;
}

let userInput = sanitizeInput(getInput())
