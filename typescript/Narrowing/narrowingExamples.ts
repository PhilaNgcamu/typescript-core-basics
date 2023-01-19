function padLeft(padding: number | string, input: string): string {
    if(typeof padding === "number") return " ".repeat(padding) + input;
    return padding + input
}

padLeft(5, "Philasande");

function printAll(strs: string | string[] | null) {
    if(strs && typeof strs === "object") {
        for(const s of strs) {
            console.log(s);
        }
    } else if (typeof strs === "string") {
        console.log(strs);
      } else {
        // do nothing
    }
}

function example(x: string | number, y: string | boolean) {
    if(x === y) {
        console.log(x.toUpperCase());
        console.log(y.toLowerCase());
    } else {
        console.log(x);
        console.log(y);
    }
}

example("philasande", "NGCAMU");

type Fish = {swim: () => void};
type Bird = {fly: () => void};
type Human = { swim?: () => void; fly?: () => void };


function move(animal: Fish | Bird | Human) {
    if("swim" in animal) return animal;
    return animal
}

function logValue(x: Date | string) {
    if(x instanceof Date) return x.toDateString();
    return x.toLowerCase()

}
