function padLeft(padding, input) {
  if (typeof padding === "number") return " ".repeat(padding) + input;
  return padding + input;
}
padLeft(5, "Philasande");
function printAll(strs) {
  if (strs && typeof strs === "object") {
    for (const s of strs) {
      console.log(s);
    }
  } else if (typeof strs === "string") {
    console.log(strs);
  } else {
    // do nothing
  }
}
