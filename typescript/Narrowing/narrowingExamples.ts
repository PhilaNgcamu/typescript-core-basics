function padLeft(padding: number | string, input: string): string {
    //This below will throw an error type becuse "padding" can be a string type whicj isn't assignable to the repeat method:
   // return "  ".repeat(padding)
  //To fix this, narrow to a specific type -- type guard:
  if(typeof padding === "number") return " ".repeat(padding) + input
  return input;
}

