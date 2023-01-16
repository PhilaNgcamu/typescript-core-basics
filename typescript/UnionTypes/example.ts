function welcomePeople(x: string[] | string) {
  //Narrow down to a specific type of "x" by checking x is a string[] or string type
  if(Array.isArray(x)) return x;
  return x
}

welcomePeople(["phila", "happy", "ngcamu"])
welcomePeople("Philasande")