function padLeft(padding, input) {
    if (typeof padding === "number")
        return " ".repeat(padding) + input;
    return padding + input;
}
padLeft(5, "Philasande");
function printAll(strs) {
    if (strs && typeof strs === "object") {
        for (const s of strs) {
            console.log(s);
        }
    }
    else if (typeof strs === "string") {
        console.log(strs);
    }
    else {
        // do nothing
    }
}
function example(x, y) {
    if (x === y) {
        console.log(x.toUpperCase());
        console.log(y.toLowerCase());
    }
    else {
        console.log(x);
        console.log(y);
    }
}
example("philasande", "NGCAMU");
function move(animal) {
    if ("swim" in animal)
        return animal.swim();
    return animal.fly();
}
