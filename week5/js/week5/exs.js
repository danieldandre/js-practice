"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const os = require("os");
//let name: string = "Alice";
const age = 30;
let username = "";
let isLoggedIn = false;
let currentScore = 0;
//currentScore = "string"
//age = 31;
//---EX 2.2 ----//
let birthDate = new Date();
let randomValue;
let userId;
userId = "1";
userId = 1;
userId = 1.12;
userId = -1.12;
//---EX 2.3---//
let middleware = null;
//---Ex 2.4---//
let scores = [10, 20, 30];
let names = ["Alice", "Bob"];
let favoriteNumbers = [7];
let colors = ["blue", "red", "golden"];
let mixedData = [7, "golden"];
//favoriteNumbers.push("7")
//----EX 3.1 ---//
function multiply(a, b) {
    console.log(a * b);
}
//multiply(5, "cat")
//----EX 3.2---//
const multiply2 = (a, b) => a * b;
const greet = (name) => `Hello ${name}!`;
const test = greet("you");
console.log(test);
//greet(2);
//----EX 3.3 ----//
const formatName = (fristName, lastName) => lastName ? `${fristName} ${lastName}` : fristName;
//tests
const test2 = formatName("Alice");
console.log(test2);
const test3 = formatName("Alice", "Smith");
console.log(test3);
//----EX 3.4 ----//
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(num => num * 2).filter((num) => num > 2);
console.log(doubled);
const names2 = ["Alice", "Bob", "Charlie"];
const upperCaseNames = names2.map(name => name.toUpperCase()).filter((name) => name.length > 4);
console.log(upperCaseNames);
//----EX 3.5 ----//
const test4 = numbers.map((num) => num * 2);
//----EX 3.6 ----//
const concatStrings = (...strings) => strings.join(' ');
const findMax = (...numbers) => Math.max(...numbers);
// Test concatStrings
console.log(concatStrings("Hello"));
console.log(concatStrings("Hello", "world"));
console.log(concatStrings("TypeScript", "is", "awesome"));
console.log(concatStrings());
// Test findMax
console.log(findMax(7));
console.log(findMax(30, 77, 25));
console.log(findMax(-10, -25, 82, 153, 777));
