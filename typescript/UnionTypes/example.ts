function welcomePeople(x: string[] | number) {
    //narrow to array type values that are strings
  if (Array.isArray(x)) {
    console.log(`Hello ${x.join(" and ")}`);
  } // Else "x" is a string
  else console.log(`Welcome lone traveler ${x}`); 
}

function getFirstThree(x: number[] | string) {
    //No need to narrow down to the specific type as the number[] | string as these share the common method
    return x.slice(0, 3)
}