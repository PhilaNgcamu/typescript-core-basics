function printCoord(pt: {x:number , y: number}) {
    console.log(`The coordinate of x is ${pt.x}`);
    console.log(`The coordinate of y is ${pt.y}`);
}

printCoord({x:3, y:4});


//Declare the function writeTwoNames with inferred types of string in proprties of the parameter, "names".
function writeTwoNames(names: {first: string, second: string} ) {
    //print out two names.
    console.log(`The names of these best friends are ${names.first} and ${names.second}`);
   
}

writeTwoNames({first: "Philasande", second: "Ngcamu"})