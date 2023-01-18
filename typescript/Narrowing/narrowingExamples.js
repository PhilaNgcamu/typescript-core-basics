function padLeft(padding, input) {
  if (typeof padding === "number") return " ".repeat(padding) + input;
  return padding + input;
}
padLeft("phila", "Philasande");
