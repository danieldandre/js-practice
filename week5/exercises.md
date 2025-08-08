## TypeScript Exercises

Typescript docs can be found at their ![official page](http://typescriptlang.org/docs)

------

### Exercise 1 - Setting up for Typescript

#### Exercise 1.1

Let's start by setting up your typescript environment.
Typescript is a compiled language, as opposed to Javascript. 

Follow the instructions ![here](https://code.visualstudio.com/docs/typescript/typescript-compiling) and
validate your TypeScript installation by running `tsc --version`.

Like any other language, you can view the list of commands and what they do by typing `tsc --help`.

```js
let test = "stinky"

function greet(name){
  let output = "Hello, " + name + " how are you doing today?";
  return output;
}

x = greet(test);
console.log(x);
```

**Pickup this script**, write it to a `greet.ts` file and **compile** it. 
Adjust the code if necessary to make it work, and run the `greet.js` you generated.

Afterwards, compile your code and using the `--outDir` flag compile your code to a directory called `js`.
Your tree should looks somewhat like this: 

```md
.
├── exercises.md
├── hello.ts
└── js
    └── hello.js
```

#### Exercise 1.2

Because you want consistency with your code, output and environment without having to write long commands each time
you want to compile, you will want to generate a config file.

1. Run `tsc --init` to generate that file.
2. Change the `outDir` option by uncommenting it and change the output to `./js`
3. Run the following command to run the TypeScript compiler in project mode: `tsc --project tsconfig.json`
4. Try compiling `greet.js` once again. Did it compile successfully? If not, fix it. Which option in your `tsconfig.json``
is making it compile incorrectly? 


#### Exercise 1.3

Figure out how to setup Run & Debug (the bug option on the left side of your VSCode). 
Docs found ![here](https://www.typescriptlang.org/docs/handbook/configuring-watch.html)


-------

### Exercise 2.1 - Basic Syntax, Type Notation & Compiler Options

Now that TypeScript is set up, let’s explore how it treats variables differently from plain JavaScript and introduce some common built-in types.

In Javascript, you'd write something like this. 

```js
let name = "Alice";
const age = 30;
```

1. Rewrite it to explicitly declare each variable's types.

2. Afterwards, create three variables with appropriate type annotation: 
- username -> string
- isLoggedIn -> boolean
- currentScore -> a number

Change the value of currentScore to a string (but not the type notation). What does TypeScript do? 
A: It alerts that the type string can not be assigned to type number.

Try changing a `const` variable's value. What happens? 
A: It gives an error as the variable is a const.

### Exercise 2.2

TypeScript comes with many built-in types beyond string, number, and boolean.

1. Create:
- birthDate → a Date
- randomValue → an unknown type
- userId → can be either a string or number (union type)
2. Try assigning different values to userId and see when TS complains.


### Exercise 2.3

When "strictNullChecks": true is enabled in tsconfig.json, variables typed as string cannot be null or undefined.

1.	Set "strictNullChecks": true in your tsconfig.json.
2.	Create let middleName: string; and try assigning it null — what happens?
3.	Update its type so it can be null (these are called Union Types)

`let middleName: string | null = null;`

### Exercise 2.4

TypeScript can declare arrays in two main ways:

```js
let scores: number[] = [10, 20, 30];
let names: Array<string> = ["Alice", "Bob"];
```

1. Create an array of favoriteNumbers containing at least 5 numbers.
2. Create an array of colors containing strings.
3. Try mixing types in favoriteNumbers — does TS allow it? A: Nope
4. Create a mixed array userData that contains both strings and numbers.


----

### Exercise 3.1 - Functions & Arrow Functions

Here is a plain JavaScript function.

```js
function multiply(a, b) {
  return a * b;
}
```

1. Add explicit type annotations for:
- a → number
- b → number
- return type → number
2. Try calling multiply(5, "cat") — what does TS do? A: Doesn't allow it
3. Enable "noImplicitAny": true in your tsconfig.json and remove the type annotations — what happens?
A: Error because a and b have type any,
4. Now change the function to print the result of a*b to the console instead of returning the value. 
How do you indicate the function is meant to return nothing? 

### Exercise 3.2

Let's now learn about arrow functions (AKA: a way of creating anonymous functions.)

Arrow functions are often more concise. Let's start by getting familiar with the notation.
An arrow function (called that because of the => assigner) can be single line or multiline.

```
// single line
const add = (x: number, y: number): number => x + y;

// multiline
const add = (x: number, y: number): number => {
  return x + y;
};
```

You will now: 
1. Convert your multiply function from Exercise 3.1 into an arrow function.
2. Make an arrow function greet that:
- Accepts name (string)
- Returns "Hello, <name>!"
3. Call greet with different values and see how TS enforces the type.

### Exercise 3.3 - Optional & Default Parameters

TypeScript allows optional parameters with ? and **default** values.

```ts
const greetUser = (name: string, greeting: string = "Hello") => {
  return `${greeting}, ${name}!`;
};
```

1. Make an arrow function formatName that:
- Takes firstName (string) and lastName (string, optional)
- Returns:
- "Alice" if only first name is provided
- "Alice Smith" if both are provided
2. Test it with one and two arguments.

### Exercise 3.4

```ts
const numbers: number[] = [1, 2, 3, 4, 5];
```

1. Use .map() with an arrow function to create a new array where each number is doubled.
2. Use .filter() with an arrow function to keep only numbers greater than 2.

```ts
const names: string[] = ["Alice", "Bob", "Charlie"];
```

1. Use .map() to turn all names into uppercase.
2. Use .filter() to keep only names with more than 4 letters.

### Exercise 3.5 – Type Inference in Arrow Functions

TypeScript can infer types from context.

```ts
const double = numbers.map(num => num * 2);
```

1.	Write a .map() call on numbers without parameter type annotations.
2.	Hover over the parameter in VS Code — what type did TS infer?
3.	Explicitly add the type and compare.

### Exercise 3.6 - Rest Parameters

Rest parameters let a function take any number of arguments and treat them as an array.

```ts
const sumAll = (...nums: number[]): number => {
  return nums.reduce((total, num) => total + num, 0);
};
```

1.	Create an arrow function concatStrings that:
- Takes any number of string arguments (use rest parameters).
- Returns a single string where all arguments are joined with spaces.
2.	Create another arrow function findMax that:
- Takes any number of number arguments.
- Returns the largest number.
3.	Test both functions with different argument counts.