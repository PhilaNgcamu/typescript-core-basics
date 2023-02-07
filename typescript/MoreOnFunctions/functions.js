function greeter(fn) {
    fn('Hello World');
}
function greeterTwo(fn) {
    fn("Hello, again");
}
function doSomething(fn) {
    console.log(fn.description + " returned " + fn(6));
}
function fn(ctor) {
    return new ctor("Hello");
}
function firstElement(arr) {
    return arr[0];
}
const u = firstElement(["Philasande"]);
const s = firstElement([1, 2, 3, 4]);
const t = firstElement([new Date()]);
function map(arr, func) {
    return arr.map(func);
}
const parsed = map(["1", "2", "3"], (n) => parseInt(n));
