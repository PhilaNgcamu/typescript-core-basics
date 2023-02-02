function padLeft(padding, input) {
    //This below will throw an error type becuse "padding" can be a string type whicj isn't assignable to the repeat method:
    // return "  ".repeat(padding)
    throw new Error("return type string");
}
