function welcomePeople(x: string[] | number) {
    //narrow to array type values that are strings
  if (Array.isArray(x)) {
    console.log(`Hello ${x.join(" and ")}`);
  } // Else "x" is a string
  else console.log(`Welcome lone traveler ${x}`); 
}