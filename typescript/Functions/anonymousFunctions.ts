//There are no type annotations but TypeScript can read what type of value is in an array
const names = ["Alice", "Bob", "Eve"]

//However, lets loop over the array,
names.forEach((element) => 
//This will give you a type error and in some cases a suggestion to correct it.
    console.log(element.toUppercase())
)

