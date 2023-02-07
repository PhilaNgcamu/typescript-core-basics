<h1>More on Functions</h1>

- In TypeScript, there are many ways how functions can be called by writing types that describe functions.

- TypeScript doesn't allow declaring properties as a function type expression, rather create an object type (as a _signature_), then assign it to the parameter of a function to be called in it. This is called **call signature**. Reference: [functions.ts](functions.ts).

- You can create a new object with the **new** operator. This can be applied when you want have a defined constructor with the new operator to create an object. This is called **construct signatures**. Reference: [functions.ts](functions.ts).

- NOTE: Use "**tsc --target es2021 <-- fileName -->**" to compile the ts file
