function printId(id: number | string) {
    console.log(`Your id is ${id}`);
}

printId(32)
printId("98")
//Error: Because printId() accepts number and string types. Not object types
printId({id:777})

