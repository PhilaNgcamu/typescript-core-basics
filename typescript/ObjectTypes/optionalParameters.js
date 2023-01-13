function printName(obj) {
    console.log(`My name is ${obj.first} ${obj.last?.toUpperCase()}`);
}
printName({ first: "Philasande" });
printName({ first: "Philasande", last: "Ngcamu" });
