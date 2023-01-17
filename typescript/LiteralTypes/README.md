<h1>Literal Types</h1>

- **Literal types** are "specific" strings and numbers types.

- `let changingString = "Hello World`, where TypeScript interpretes it as `let changingString: string` for any possible string. Reference: [literalTypes.ts](literalTypes.ts) from line 1.

- `const constantString = "Hello World`, where TypeScript interpretes it as `const constantString: Hello World`, where `Hello World` is a literal type that is not changed. Reference: [literalTypes.ts](literalTypes.ts) from line 5.

- it's not useful to have one literal type on a variable but it's worth to share to understand literal types. Use, `let x: "Hello" = "Hello"` where "Hello" is the literal type of ONLY the "Hello" value. Not this: `let x: "Hello = "World""`. Reference: [literalTypes.ts](literalTypes.ts) from line 9.
