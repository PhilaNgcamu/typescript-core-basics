function printId(id: number | string) {
  //Error beacuse Typescript anticipates where id will have a number or string value but the number type doesn't have the .toUpperCase() method.
  console.log(`You id is: ${id.toUpperCase()}`);
  
}

//To fix this use, narrowing to reduce the id variable to a specific true type
function printID(id: number | string) {
  if(typeof id === "string") console.log(`You id is: ${id.toUpperCase()}`);
  else Number.isInteger(id)
}