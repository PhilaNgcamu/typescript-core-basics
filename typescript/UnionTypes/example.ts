function welcomePeople(x: string[] | string) {
  //Narrow down to a specific type of "x" by checking x is a string[] or string type
  if(Array.isArray(x)) return x;
  return x
}

welcomePeople(["phila", "happy", "ngcamu"])
welcomePeople("Philasande")

function getFirstThree(x: number[] | string) {
  //no need to narrow down because the types, number[] and string have the common method of ".slice()"
  return x.slice(0,3)
}