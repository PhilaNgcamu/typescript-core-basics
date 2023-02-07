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
