function printName(obj: {first: string, last?: string}) {
    console.log(`My name is ${obj.first} ${obj.last}`);
}

//the "last" property will return the undefined value if there's no string
printName({first: "Philasande"})
printName({first: "Philasande", last: "Ngcamu"})

//Declare clubNames with paramters with object types of strings
function clubNames(clubs: {firstClub: string, secondClub?: string}) {
    console.log(`These are two European clubs, ${clubs.firstClub} & ${clubs.secondClub}`);
}

clubNames({firstClub: "Manchester United", secondClub: "Real Madrid"})

