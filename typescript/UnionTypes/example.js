function welcomePeople(x) {
  //Narrow down to a specific type of "x" by checking x is a string[] or string type
  if (Array.isArray(x)) return x;
  return x;
}
console.log(welcomePeople(["phila", "happy", "ngcamu"]));
console.log(welcomePeople("Philasande"));
