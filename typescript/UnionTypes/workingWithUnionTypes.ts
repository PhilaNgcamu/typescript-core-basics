function print(id: number | string) {
    //Leads to an error beacuse id with the type, number, cannot have the same method as string as TypeScript assumes that both types to be true without being exected
    console.log(id.toUpperCase());
}

//To fix this, "narrow" the union to allow TypeScript to deduce to a specific type based on the code: 
function printID(id: number | string) {
    //"Narrow" the union into a specific type by checking if the id is a specific type using "typeof"
    if(typeof id === "string") {
        console.log(id.toUpperCase());
    }
    //Else print out a number
    else console.log(id);
}