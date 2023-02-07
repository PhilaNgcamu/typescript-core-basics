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
const t = firstElement([]);
function map(arr, func) {
    return arr.map(func);
}
const parsed = map(["1", "2", "3"], (n) => parseInt(n));
function longest(a, b) {
    if (a.length > b.length)
        return a;
    return b;
}
const longerArray = longest([1, 2, 3, 4], [1, 2, 3, 4, 5, 6, 7, 8]);
const longerString = longest("Philasande", "Ngcamu");
//Error below as the function doesn't allow number arguments beacuse of the length constraint:
//const notOK = longest(12,45)
