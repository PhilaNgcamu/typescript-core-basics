//Declare type alias, Point.
type Point = {
    x: number,
    y: number
}

function printCoord(pt: Point) {
    console.log(`The coordinates of x value is 
     ${pt.x}`);
     console.log(`The coordinates of y value is 
     ${pt.y}`)
}

printCoord({y: 100, x: 100})

type ID = number | string;

declare function getInput(): string;
declare function sanitize(str: string): string;

type UserInputSanitizedString = string;

function sanitizeInput(str: string): string {
    return sanitize(str)
}

let userInput = sanitizeInput(getInput())