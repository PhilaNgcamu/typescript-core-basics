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
const t = firstElement([])

function map<Input, Output>(arr: Input[], func: (arg: Input) => Output): Output[]{ 
    return arr.map(func)
}

const parsed = map(["1", "2", "3"], (n) => parseInt(n));

function longest<Type extends { length: number }>(a: Type, b: Type) {
    if(a.length > b.length) return a;
    return b;
}

const longerArray = longest([1,2,3,4], [1,2,3,4,5,6,7,8]);
const longerString = longest("Philasande", "Ngcamu");
//Error below as the function doesn't allow number arguments beacuse of the length constraint:
//const notOK = longest(12,45)

function minimumLength<Type extends { length: number }>(obj: Type, minimum: number): Type {
    if(obj.length >= minimum) return obj;
    return obj
    //Result an error because the the value return is not the type of the input due to inference:
   // return { length: minimum };

}
