<h1>Literal Types</h1>

- **Literal types** are "specific" strings and numbers types.

- `let changingString = "Hello World`, where TypeScript interpretes it as `let changingString: string` for any possible string. Reference: [literalTypes.ts](literalTypes.ts) from line 1.

- `const constantString = "Hello World`, where TypeScript interpretes it as `const constantString: Hello World`, where `Hello World` is a literal type that is not changed. Reference: [literalTypes.ts](literalTypes.ts)

- it's not useful to have one literal type on a variable but it's worth to share to understand literal types. Use, `let x: "Hello" = "Hello"` where "Hello" is the literal type of ONLY the "Hello" value. Not this: `let x: "Hello = "World""`. Reference: [literalTypes.ts](literalTypes.ts)

- "Combining" literals as unions in function prameters and variables, which is more useful than having one literal. Reference: [literalTypes.ts](literalTypes.ts)

- You can also combine numeric literal types. Reference: [literalTypes.ts](literalTypes.ts)

- You can also combine literal types with non-literal types. Reference: [literalTypes.ts](literalTypes.ts) from line 24.

- ```const obj = { counter: 0 };
  if (someCondition) {
    obj.counter = 1;
  }
  ```

- The above code, TypeScript interprets the property of obj, "counter" to be a **number** type, not 0 or 1. This also prevents the property being changed to another assignment value.
  Note: Use, `as const` to convert an object to be type literals. This is know as **Literal Inference**. Reference: [literalTypes.ts](literalTypes.ts)

- NOTE: **Boolean literals**, which is `true | false` (union) can also be used.

- NOTE: Use "**tsc --target es2021 <-- fileName -->**" to compile the ts file
