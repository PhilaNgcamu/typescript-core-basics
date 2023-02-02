function padLeft(padding, input) {
    //This below will throw an error type becuse "padding" can be a string type whicj isn't assignable to the repeat method:
    // return "  ".repeat(padding)
    //To fix this, narrow to a specific type -- type guard:
    if (typeof padding === "number")
        return " ".repeat(padding) + input;
    return input;
}
function printAll(strs) {
    //NOTE: null is also an object. Use conditional operators to only narrow to, string[]
    if (strs && typeof strs === "object") {
        for (const s of strs) {
            console.log(s);
        }
    }
    else {
        //do nothing
    }
}
function example(x, y) {
    if (x === y) {
        x.toLowerCase();
        y.toLowerCase();
    }
    else {
        console.log(y);
    }
}
