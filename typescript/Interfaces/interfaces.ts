interface Point {
    x: number,
    y: number
}

function printCoord(pt: Point) {
    console.log(`The coordinates of ${pt.x}`);
    console.log(`The coordinates y ${pt.y}`);
}

printCoord({x: 100, y: 2000})