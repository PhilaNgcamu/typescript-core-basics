<h1>Narrowing</h1>

- The term, "narrowing" describes the code that checks if a variable is a specifc type. If a variable has 2 or more types, narrowing enables TypeScript to determine a specific type according to the code. Reference: [narrowingExamples.ts](narrowingExamples.ts) from line 1.

- We can "narrow" down to a specific type by having a "type guard", a term to describe the `typeof` keyword used to check if it's a specific type. Reference: [narrowingExamples.ts](narrowingExamples.ts) from line 1.

- What if the function had 3 types in a parameter, then we "narrowed" down to match a specific type and got two resulting types. To fix this, we will use **truthiness narrowing**. Reference: [narrowingExamples.ts](narrowingExamples.ts) from line 8.

- The term **truthiness narrowing** describes the use of conditional expressions such as `&&`s,`||`s, if statements, Boolean negations (`!`), etc. to be coerced to boolean types.

- You can use **equality narrowing** by comparing the types of the varibles that store corresonding values. Reference: [narrowingExamples.ts](narrowingExamples.ts) from line 20.

- The `in` instance is used to check if the property name in an object exists.

- NOTE: Use "**tsc --target es2021 <-- fileName -->**" to compile the ts file
