function padLeft(padding: number | string, input: string): string {
    if(typeof padding === "number") return " ".repeat(padding) + input;
    return padding + input
}

padLeft(5, "Philasande");

function printAll(strs: string | string[] | null) {
    if(typeof strs === "object") {
        for(const s of strs) {
            console.log(s);
        }
    } else if (typeof strs === "string") {
        console.log(strs);
      } else {
        // do nothing
    }
}