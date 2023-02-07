<h1>More on Functions</h1>

- In TypeScript, there are many ways how functions can be called by writing types that describe functions.

- TypeScript doesn't allow declaring properties as a function type expression, rather create an object type, then assign it to the parameter of a function to be called in it. This is called **call signature**. Reference: [functions.ts](functions.ts).

- NOTE: Use "**tsc --target es2021 <-- fileName -->**" to compile the ts file
