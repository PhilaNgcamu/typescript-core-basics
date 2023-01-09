const printName = (obj: {first: string, last?: string}) => {
    console.log(`My name is ${obj.first}`); 
}

printName({first: "Phila"})
printName({first: "Phila", last: "Ngcamu"})
