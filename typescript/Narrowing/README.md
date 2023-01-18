<h1>Narrowing</h1>

- The term, "narrowing" describes the code that checks if a variable is a specifc type. If a variable has 2 or more types, narrowing enables TypeScript to determine a specific type according to the code. Reference: [narrowingExamples.ts](narrowingExamples.ts) from line 1.

- We can "narrow" down to a specific type by having a "type guard", a term to describe the `typeof` keyword used to check if it's a specific type. Reference: [narrowingExamples.ts](narrowingExamples.ts) from line 1.

- What if the function had 3 types in a parameter, then we "narrowed" down to match a specific type and got two resulting types. To fix this, we will use **truthiness narrowing**. Reference: [narrowingExamples.ts](narrowingExamples.ts) from line 8.
