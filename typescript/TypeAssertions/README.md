<h1>Type Assertions</h1>

- TypeScript may not know which specific type is returned from an element. To fix this use a type assertion. Eg, `const myCanvas = document.getElementById("main_canvas") as HTMLCanvasElement;` where `HTMLCanvasElement` is the returned type. Reference: [typeAssertions.ts](typeAssertions.ts).

- NOTE: **Type Assertions** should be used to specify the returned type when TypeScript might not know what type will be potentially returned.
