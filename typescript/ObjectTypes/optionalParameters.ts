function printName(obj: {first: string, last?: string}) {
    if(obj.last) {
    console.log(`My name is ${obj.first} ${obj.last}`);  
    }
    console.log(`My name is ${obj.first}`);  
}

printName({first: "Philasande"})
printName({first: "Philasande", last: "Ngcamu"})