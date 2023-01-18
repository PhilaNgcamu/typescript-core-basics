function padLeft(padding: number | string, input: string): string {
    if(typeof padding === "number") return " ".repeat(padding) + input;
    return padding + input
}

padLeft(5, "Philasande")