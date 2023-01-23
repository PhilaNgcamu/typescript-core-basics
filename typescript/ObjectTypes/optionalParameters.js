function printName(obj) {
  if (obj.last) {
    console.log(`My name is ${obj.first} ${obj.last}`);
  } else console.log(`My name is ${obj.first}`);
}
printName({ first: "Philasande" });
printName({ first: "Philasande", last: "Ngcamu" });
