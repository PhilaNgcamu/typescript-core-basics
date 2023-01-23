function printCoord(pt : {x: number, y: number}) {
    console.log(`The coordinate of x is ${pt.x}`)
    console.log(`The coordinate of y is ${pt.y}`)
}

printCoord({y:88, x:66})

function writeTwoClubs(clubs: {first: string, second: string}) {
    console.log(`The names of the two clubs are ${clubs.first} & ${clubs.second}`);
    
}

writeTwoClubs({first: "Real Madrid", second: "Barcelona"})