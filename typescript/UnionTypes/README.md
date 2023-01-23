TypeScript allows you to build new types out of existing ones by combining them.

- You can annote the parameter in printId with 2 or more types, which is called a union type. Reference: [unionTypes.ts](unionTypes.ts)

- We are introduced to the concept of narrowing, where the parameter has a union type, ie. If we want to use a method on the parameter we should specify the what type of value does it have. Reference: [workingWithUnionTypes.ts](workingWithUnionTypes.ts)

- Narrowing is also used on the function, welcomePeople. Note: if the function parameter has union type, you may not use narrowing beacuse 2 or more types can share the same method. Reference: [example.ts](example.ts)

- NOTE: Use "**tsc --target es2021 <-- fileName -->**" to compile the ts file
