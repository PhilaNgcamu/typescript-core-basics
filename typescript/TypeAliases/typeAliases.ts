//Declare the the type alias named "Point" (object type)
type Point = {x: number, y: number};

function printCoord(pt: Point) {
    console.log(`The coordinates of x is ${pt.x}`);
    console.log(`The coordinates of y is ${pt.y }`)
}

printCoord({x: 12, y:88})