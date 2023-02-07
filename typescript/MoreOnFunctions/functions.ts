function greeter(fn: (a: string) => void) {
    fn('Hello World')
}

type GreeterFunction = (a: string) => void;
function greeterTwo(fn: GreeterFunction) {
     fn("Hello, again")
}

type DescribableFunction = {
    description: string;
    (someArg: number): boolean;
}

function doSomething(fn: DescribableFunction) {
    console.log(fn.description + " returned " + fn(6));  
}


type SomeObject = number;
type SomeConstructor = {
    new (s: string): SomeObject
}

function fn(ctor: SomeConstructor) {
    return new ctor("Hello")
}

function firstElement<Type>(arr: Type[]): Type | undefined {
    return arr[0];
}

const u = firstElement(["Philasande"])
const s = firstElement([1,2,3,4])
const t = firstElement([new Date()])
