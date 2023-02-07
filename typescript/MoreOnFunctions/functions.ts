function greeter(fn: (a: string) => void) {
    fn('Hello World')
}

type GreeterFunction = (a: string) => void;
function greeterTwo(fn: GreeterFunction) {
     fn("Hello, again")
}