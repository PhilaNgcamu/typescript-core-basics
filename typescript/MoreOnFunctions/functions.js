function greeter(fn) {
    fn('Hello World');
}
function greeterTwo(fn) {
    fn("Hello, again");
}
function doSomething(fn) {
    console.log(fn.description + " returned " + fn(6));
}
