import os = require("os");

//let name: string = "Alice";
const age: number = 30;
let username: string = "";
let isLoggedIn: boolean = false;
let currentScore: number = 0;

//currentScore = "string"
//age = 31;

//---EX 2.2 ----//
let birthDate: Date = new Date();
let randomValue: unknown; 
let userId: string | number;

userId = "1"
userId = 1
userId = 1.12
userId = -1.12

//---EX 2.3---//
let middleware: string | null = null;

//---Ex 2.4---//
let scores: number[] = [10, 20, 30];
let names: Array<string> = ["Alice", "Bob"];
let favoriteNumbers: number[] = [7];
let colors: Array<string> = ["blue", "red", "golden"];
let mixedData: (number | string)[] = [7, "golden"];
//favoriteNumbers.push("7")

//----EX 3.1 ---//
function multiply(a: number, b: number): void {
  console.log(a * b);
}

//multiply(5, "cat")

//----EX 3.2---//
const multiply2 = (a: number, b:number): number => a * b
const greet = (name: string): string => `Hello ${name}!`;
const test = greet("you");
console.log(test);

//greet(2);

//----EX 3.3 ----//
const formatName = (fristName: string, lastName?: string): string =>
     lastName? `${fristName} ${lastName}`: fristName;
//tests
const test2 = formatName("Alice");
console.log(test2);
const test3 = formatName("Alice", "Smith");
console.log(test3);

//----EX 3.4 ----//
const numbers: number[] = [1, 2, 3, 4, 5];
const doubled = numbers.map(num => num * 2).filter((num) => num > 2);
console.log(doubled);

const names2: string[] = ["Alice", "Bob", "Charlie"];
const upperCaseNames = names2.map(name => name.toUpperCase()).filter((name) => name.length > 4);
console.log(upperCaseNames);


//----EX 3.5 ----//
const test4 = numbers.map((num: number) => num * 2);

//----EX 3.6 ----//
const concatStrings = (...strings: string[]): string => strings.join(' ');
const findMax = (...numbers: number[]): number => Math.max(...numbers);

// Test concatStrings
console.log(concatStrings("Hello"));                   
console.log(concatStrings("Hello", "world"));           
console.log(concatStrings("TypeScript", "is", "awesome")); 
console.log(concatStrings());                          

// Test findMax
console.log(findMax(7));                 
console.log(findMax(30, 77, 25));            
console.log(findMax(-10, -25, 82, 153, 777));   