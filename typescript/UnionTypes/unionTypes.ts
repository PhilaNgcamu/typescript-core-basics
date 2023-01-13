function printId(id: number | string) {
    //Where id is inferred with union type with string and number types
    console.log(`Your id is ${id}`);  
}

//Id takes a number
printId(1001)
//Id takes a string
printId("1001")
//id doesn't take an object type
printId({ myID: 22342 });