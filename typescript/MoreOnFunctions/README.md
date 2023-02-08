<h1>More on Functions</h1>

- In TypeScript, there are many ways how functions can be called by writing types that describe functions.

- TypeScript doesn't allow declaring properties as a function type expression, rather create an object type (as a _signature_), then assign it to the parameter of a function to be called in it. This is called **call signature**. Reference: [functions.ts](functions.ts).

- You can create a new object with the **new** operator. This can be applied when you want have a defined constructor with the new operator to create an object. This is called **construct signatures**. Reference: [functions.ts](functions.ts).

<h2>Generic Functions</h2>

- In TypeScript, generic functions are used when we want to describe a correspondence between two values (input and output) by declaring a _type parameter_ in the function signature.

- This ensures that we have a specific type when a function returns value. Reference: [functions.ts](functions.ts).

- Beware when working with constraints in a function that returns a `Type` or a value that matches the constraint because the function expects same `Type` to be returned. Reference: [functions.ts](functions.ts).

- NOTE: Use "**tsc --target es2021 <-- fileName -->**" to compile the ts file
