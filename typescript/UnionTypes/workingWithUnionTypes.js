function printId(id) {
    //Since id is a union of two types, the method for the string type doesn't exist for the number type.
    //console.log(id.toUpperCase());
}
printId("2002");
//To fix this above error, "narrow" the variable to a specific type by checking if the argument is a number or a string type
function printID(id) {
    if (typeof id === "number")
        return Number.isInteger(id);
    return id.toUpperCase();
}
printID(2003);
printID("Philasande");
