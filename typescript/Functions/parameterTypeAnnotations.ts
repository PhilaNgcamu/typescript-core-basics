function greet(name: string) {
    console.log(`Hello, ${name.toUpperCase()}`);  
}

greet(42) //Which results to a runtime error because TypeScript expects the parameter to store a string inferred Type value