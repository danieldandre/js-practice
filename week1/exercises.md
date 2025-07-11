
## Day 1



file in week1/day1.js



## Day 2

### Exercise 1
#### What is the difference between Null & Undefined types in Javascript? 

Answer: undefined stands for both value and type while null is for values only

### Exercise 2: Array Manipulation
#### Exercise 2.1 - Can an array contain other arrays? What data types can you store in an array? 

Answer: Yes. All of them.

#### Exercise 2.2

a) How do you index an array? 
    []

b) How do you access the last value of an array? 
    [i], where 0 is the firs position

c) How do you access each second value in an array? 
    day2.js

d) How do you access every element except the first value of an array? 
    Using a for lop but "i = 1" which means it's skipping the first element

#### Exercise 2.3

Show me example code employing each of the following methods: .pop, .push, .shift, .unshift
    day2.js

#### Exercise 2.4

Show me example code on how to use .map, .filter, .find, .includes and .indexOf.

#### Exercise 2.5 (Bonus)

Create an 8×8 “checkerboard” array where the value is 0 on every even square and 1 on every odd square. Use only vanilla JavaScript array methods—no external libraries.

Your checkerboard pattern should be visible by calling console.log(your_array). 


## Day 3

### Exercise 1 - Loops
#### Exercise 1.1 - What is a loop? Explain in the simplest way possible. 

Answer: A loop is a strcuture of code that repeats itself until certain conditions are met

#### Exercise 1.2 - What does a `for loop` do? Explain succinctly and create a code example.

Answer: A for-loop runs a block of code a specific number of times, its usually in the format of: for (let i = 0; i < N; i++), N being the number of times the block will repeat itself and i the index that updates with i++ and eventually halts when the condition i < N is met.

#### Exercise 1.3 - What does a `while loop` do? Explain succinctly and create a code example.

Answer:A while-loop runs a block of code while a condtion remains true. Example on Day3.js.

#### Exercise 1.4 - What does a `for...of` loop do? Explain succinctly and create a code example.

Answer: A for-of loop iterates directly on the values of any iterable such as arrays, strings and others.

#### Exercise 1.5 - What does a `for...in` loop do? Explain succinctly and create a code example.

Answer: A for-in loop covers all the properties of an object. 

### Exercise 2

Create an array for 0 -> 10. Loop over it and return only even numbers. 

### Exercise 3

Generate an array with random numbers of potentially random size. Loop through that array and return the largest number. 
Hint: Use [this](https://www.30secondsofcode.org/js/s/random-integer-array-in-range/#:~:text=You%20can%20use%20Array.,()%20to%20make%20them%20integers.)

### Exercise 4

Modify the previous exercise to print/log the highest number and the position in the array. Example in day3.js example.

### Exercise 5

`{name: "Jane", age: 25}`

Loop over the above structure and print each value as "key: "value". Choose the appropriate loop. Example in day3.js example.



## Day 4

### Exercise 1 - Control Flow
#### Exercise 1.1

Implement an if, if-else, else statement. 
The implementation of this flow should control at least 5 different outcomes. 

#### Exercise 1.2

Implement a switch statement. 
The implementation of this flow should control at least 5 different outcomes. 

### Exercise 2 - Questions
#### Exercise 2.1

When would you use an if statement? 

A: The if statement runs a block of code if a specified condition is truthy. If the condition is falsy, another statement will be executed (else if and else). We can use a wide variety of conditions, like ranges, multiple variables, function calls, boolean logic, etc... Unlike the switch, the else if can return earlier ("if this fails, exit early")

#### Exercise 2.2

When would you use a switch statement? 

A: A switch statment should be used when there are multiple choices to select. In a switch we can only do equality checks.

#### Exercise 3 - Combining loops and control flow
#### Exercise 3.1

Write a loop that iterates through an array of objects, where each object represents a product with properties like `name`, `category`, and `price`. Find and print the names of all products that belong to the "fruit" category and have a price less than $5. Use the most appropriate control flow statements for this task.

#### Exercise 3.2

Write a loop that will iterate through an array of words and print only those words that start and end with the same vowel (A, E, I, O, U), case-insensitive. Choose the correct control flow statement.

#### Exercise 3.3

In an exercise where you used switch statements, implement a default. 

### Exercise 4 - Deck of Cards

1. You will implement a frech, ordered deck of cards. 

Ranks = `['A', '2', ..., '10', 'J', 'Q', 'K']`
Suits = `['♠', '♥', '♦', '♣']`

You may represent a card by concatenating rank and suit (e.g. `K♦`)

2. Create a function that will shuffle your deck of cards using a Naïve "random-pick" - repeatedly pick a random remaining card
until there are no more new cards. 

3. Create a function that will shuffle your deck of cards using a "Fisher-Yates" shuffle. To understand the Fisher-Yates, read more about
it here: https://www.tutorialspoint.com/data_structures_algorithms/dsa_fisher_yates_shuffle_algorithm.htm

4. Using your shuffled deck, using either method, deal one card to each student in round-robin order until every student has the right number
of cards. You should be able to pick up 5 students and shuffle anywhere from 2 to 7 cards each. 

5. Return an object with two properties: 

`
  hands: string[][], --> A nested array comprised of arrays with each player's hands
  deck: string[] --> An array with the leftover undealt cards in order
`

#### Exercise 4.1 - Follow-up theoretical questions

1. What does O(n) mean in programming? 

A: When a said algorith is O(n), it means that the amout of time it takes to complete grows along side the size of the input, it's a proportional growth

2. What is the O(n) for the "random-pick" algorithm? 

A: The O(n) for a random-pick algorithm would be picking a number and then remopving that number via the splice method. In the worst case scenario the number picked might be close the biginning which makes all subsequent elemtns to shift down one slot.

3. What is the O(n) for the "Fisher-Yates"? 

A: the Fisher-Yates shuffle runs in O(n) time as it loops once from the last element down to the second one. There is also a constant work per interation as it generates a random index and swaps two elements.

4. BONUS QUESTION: What's the chance that the first card dealt is an Ace? Your answer should be based on the outcome 
of 1000 simulated draws. 

## Day 5

### Exercise 1 - Exception Handling

1. You might remember this bit of code. Instead of using "return" to catch an error, use `throw`. 
What is the benefit of using `throw`? Suppose, instead, that your function returned an integer instead. 
Would handling the error with `return` have handled it better?  

```js
function ScoreGrade(score) {
    if (typeof score !== 'number' || score < 0 || score > 100) { //Somewhere in this block
        return 'Wrong Input';
    }

    if (score >= 90) {
        return 'Excellent';
    } else if (score >= 70) {
        return 'Very good';
    } else if (score >= 50) {
        return 'Good';
    } else if (score >= 20) {
        return 'Bad';
    } else {
        return 'Very bad';
    }
}

```

2. Using the modified function above, implement it within a `try-catch` block. 
Explain what happens when you implement a `try-catch` block. What cases would you want to implement it this way? 

3. Now modify the try-catch statement to also include a `finally`. What can we use `finally` for? 

4. Adapt the code below. Try at least 5 different types of error. 

```js

try {
  something
} catch (error) {
  if (error instanceof RangeError) {
    anError(error); 
  } else if (error instanceof ReferenceError) {
    anotherError(error);
    ...
  }
}

```

5. Implement your own error, by extending the Error class (```extends Error```). Afterwards, show it in practice. 

### Exercise 2 - Programming Paradigms


1. What is procedural programming? How do you structure your code under an imperative (more specifically procedural) programming paradigm? 

A: 

2. What is Object Oriented Programming? How do you structure your code under an OOP paradigm? 

A: 

3. Which paradigm fits the code you've been building as of late? 

A: 

4. Refactor this code into as a class, following OOP. Your code should:
- Create a TodoItem class to represent each task
- Create a TodoList class to manage the collection
- Encapsulate behaviours (add, remove, complete, list)
- Eliminate reliance on global variables

```js 

let todos = [];

function addTodo(task) {
  todos.push({ task: task, completed: false });
}

function completeTodo(index) {
  if (index >= 0 && index < todos.length) {
    todos[index].completed = true;
  }
}

function removeTodo(index) {
  if (index >= 0 && index < todos.length) {
    todos.splice(index, 1);
  }
}

function listTodos() {
  for (let i = 0; i < todos.length; i++) {
    const status = todos[i].completed ? "✔️" : "❌";
    console.log(`${i + 1}. ${status} ${todos[i].task}`);
  }
}

// Usage
addTodo("Buy milk");
addTodo("Clean room");
completeTodo(0);
listTodos();

```


### Exercise 3

Remove all non-letter characters and extra spaces from a sentence. 

```js
cleanSentence("  Hello!!!   This   is ##a test. ") // --> Should output: "Hello This is a test"

```

Hint: Use regexp with replace and trim


### Exercise 4

Create a way of converting camelCase strings to a regular sentence. 

```
breakCamelCase("camelCaseSentence"); // --> Should putout "camel Case Sentence"

```


### Exercise 5 - Bubble Sort

Bubble sort is a simple sorting algorithm that repeatedly steps through the list, compares adjacent elements, and swaps them if they are in the wrong order. This process is repeated until the list is sorted.

![Bubble Sort Diagram](https://www.computersciencebytes.com/wp-content/uploads/2016/10/bubble_sort.png)

Implement a bubblesort code, using a procedural paradigm. Implement a way of visually debugging your code (e.g. comparing two arrays)
to validate, in the very least, the unsorted array vs. the sorted array. 

You should also be able to pick up a pen and paper and explain how bubble sort works. 