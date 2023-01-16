function printId(id: number | string) {
    console.log(`Your id is ${id}`);  
}

printId("202")

printId(202)

//Error beacuse the "id" parameter doesn't take in an object type
printId({myId: 232})