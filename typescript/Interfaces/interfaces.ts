interface Point {
    x: number,
    y: number
}

function printCoord(pt: Point) {
    console.log(`The coordinates of x value is ${pt.x}`);
    console.log(`The coordinates of y value is ${pt.y}`);
}

console.log(printCoord({x: 100, y: 100}));
