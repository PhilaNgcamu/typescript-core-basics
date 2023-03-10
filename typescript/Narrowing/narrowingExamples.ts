function padLeft(padding: number | string, input: string): string {
    //This below will throw an error type becuse "padding" can be a string type whicj isn't assignable to the repeat method:
   // return "  ".repeat(padding)
  //To fix this, narrow to a specific type -- type guard:
  if(typeof padding === "number") return " ".repeat(padding) + input
  return input;
}

function printAll(strs: string | string[] | null) 
{
    //NOTE: null is also an object. Use conditional operators to only narrow to, string[]
    if(strs && typeof strs === "object") {
        
        for(const s of strs) {
            console.log(s);
            
        }
    } else { 
        //do nothing
    }
}

function example(x: string | number, y: string | boolean) {
    if(x === y) {
        x.toLowerCase();
        y.toLowerCase()
    } else {
        console.log(y);
    }
}

type Fish = { swim: () => void }
type Bird = { fly: () => void, eat: () => void }

function move(animal: Fish | Bird) {
    if("swim" in animal) return animal.swim()
    return animal.eat()
}

function logValue(x: Date | string) {
    if(x instanceof Date) console.log(x.toLocaleDateString());
    else console.log(x.toLowerCase());
}

function isFish(pet: Fish | Bird): pet is Fish {
    return Boolean((pet as Fish))
}
declare function getSmallPet() : Fish | Bird

let pet = getSmallPet()

if(isFish(pet)) pet.swim();
else pet.fly()
