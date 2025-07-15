## Day 6

### Exercise 1 - Recursion (Simpler)

Write a recursive function to compute the factorial of a non-negative integer. 

```js
factorial(0); // ➞ 1
factorial(1); // ➞ 1
factorial(4); // ➞ 24
factorial(5); // ➞ 120
```

### Exercise 2 - Reucrsion (Intermediate)

Given an array that can contain:
	•	Numbers
	•	Other arrays (which themselves may contain numbers or more arrays)

Write a function deepSum(arr) that returns the sum of all numbers, regardless of nesting level.

```js
deepSum([1, 2, 3]);                         // ➞ 6
deepSum([1, [2, 3], 4]);                    // ➞ 10
deepSum([1, [2, [3, 4], 5], 6]);            // ➞ 21
deepSum([[1, 2], [3, [4, [5]]]]);           // ➞ 15
deepSum([]);      
```

- Do not use .flat() or external libraries
- Assume all values are either numbers or arrays
- Use recursion to traverse through the nested structure

### Exercise 3 - Consolidating OOP

#### Exercise 3.1

Create a Rectangle class with:
- `width` and `height` as properties
- area() method 
- isSquare() method that returns boolean


#### Exercise 3.2

Create a class `Counter` with:

Properties:
- #count (private): The current count value
- #max (private): Optional max value

Methods: 
- increment(): increases count by 1
- decrement(): decreases count by 1
- reset(): sets count back to 0
- getValue(): returns current amount
- setMax(): Sets new max value 

Static Property:
- Counter.totalInstances: Tracks how many counters have been created

Constraints: 
- A private counter method (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/Private_elements)
- Do not allow external access to count or max
- Include input validation where necessary

```js
// Examples
const counter1 = new Counter(10); // max = 10
counter1.increment();
counter1.increment();
console.log(counter1.getValue()); // ➞ 2

counter1.setMax(5); // ✅ Works if count ≤ 5
counter1.reset();   // ➞ count = 0

const counter2 = new Counter(); // max = Infinity by default
console.log(Counter.totalInstances); // ➞ 2
```

#### Exercise 3.3

Create a class hierarchy for animals using inheritance.

### Base Class: `Animal`

**Properties:**
- `name` (string)
- `age` (positive integer)
- `type` (string): set automatically by subclass

**Private Field:**
- `#energy` (starts at 100)

**Methods:**
- `makeSound()`: returns `"..."` (to be overridden)
- `sleep(hours)`: increases energy by `10 * hours`, max 100
- `play(minutes)`: decreases energy by `1 * minutes`, throws if energy < 10
- `getEnergy()`: returns current energy level

**Static Property:**
- `Animal.totalAnimals`: tracks number of Animal instances created

---

### Subclass: `Dog`

Overrides:
- `makeSound()`: returns `"Woof!"`

Adds:
- `fetch()`: returns `"[name] runs to fetch the ball!"`, reduces energy by 20

---

### Subclass: `Cat`

Overrides:
- `makeSound()`: returns `"Meow."`

Adds:
- `scratch()`: returns `"[name] scratches the furniture!"`, reduces energy by 10

---

### Constraints:
- Use `#` private fields for energy  
- Use static class property for instance tracking
- Enforce input validation (e.g., non-negative age)


```js
// Examples
const dog = new Dog("Fido", 3);
dog.play(20);
console.log(dog.makeSound()); // ➞ "Woof!"
console.log(dog.fetch());     // ➞ "Fido runs to fetch the ball!"
console.log(dog.getEnergy()); // ➞ shows updated energy

const cat = new Cat("Luna", 2);
cat.sleep(3);
console.log(cat.makeSound());  // ➞ "Meow."
console.log(cat.scratch());    // ➞ "Luna scratches the furniture!"
console.log(Animal.totalAnimals); // ➞ 2
```


### Exercise 4 - Selection Sort

Insertion sort is a simple sorting algorithm that builds a sorted array one element at a time by repeatedly inserting the next unsorted element into its correct position in the sorted portion of the list.

![Insertion Sort Diagram](https://media.geeksforgeeks.org/wp-content/uploads/20240408140301/Insertion-Sort.webp)

Implement an insertion sort algorithm using a procedural programming paradigm. Include a method of visually debugging your code, such as printing or comparing the unsorted array against the sorted array for validation.


## Day 7

### Exercise 1 - Merge Sort

`Merge sort` is a divide-and-conquer algorithm that recursively divides an array into halves, sorts each half, and merges the sorted halves back together to produce a fully sorted array.

![Merge Sort Diagram](https://www.w3schools.com/dsa/img_mergesort_long.png)

Implement a `merge sort` algorithm. Include a method of **visually debugging your code**, such as logging different states of the array, if necessary to validate or better understand the logic. 

```
The following page will contain much needed resources to better understand and visualise the problem:
https://www.w3schools.com/dsa/dsa_algo_mergesort.php
(please avoid studying the code from this page)
```


### Exercise 2 - Input Validation, Parsing & Async Operator

You're building a small backend service to fetch weather data. Structure your code into 3 layers:

- **Schema** (Zod validation)
- **Parser** (input processor)
- **Operator** (`async/await` logic)

You will need to sign up and get your API key from: https://openweathermap.org/
Docs for the OpenWeather API may be found here: https://openweathermap.org/api


---

### 2.1 – Schema Validation

Create a Zod schema for the input:

- `city` (string, required)
- `units` (optional, enum: `"metric"`, `"imperial"`, `"standard"`, default = `"metric"`)

```js
const input = { city: "Lisbon", units: "imperial" };
const badInput = { city: "London", units: "celsius" };
```

Use `.parse()`, `.enum()`, and `.default()`.

```
Read more about Zod here: 
https://www.cloudthat.com/resources/blog/data-validation-in-javascript-with-zod
```

---

### 2.2 – Parser Function

Create `parseWeatherRequest(input)`:

- Accepts unknown input
- Validates it using the schema
- Returns parsed data
- Throws error on failure

---

### 2.3 – Operator Function (Async)

Create an `async` function `fetchWeather({ city, units })`:

- Builds the OpenWeatherMap API URL
- Uses `fetch()` and `await` to get data
- Returns a simplified object:
  - `city`, `temp`, `condition`
- Handles errors with `try/catch`

```js
const result = await fetchWeather({ city: "Lisbon", units: "metric" });
// ➞ { city: "Lisbon", temp: 24.7, condition: "clear sky" }
```

---

### Constraints

- Do not hardcode API keys
- Use 3 separate files:
  - `weatherSchema.js`
  - `parseWeatherRequest.js`
  - `fetchWeather.js`
- Use either CommonJS or ESM

---

### 2.4 - Bonus (Optional)

- Add a fake delay (`await new Promise(...)`)
- Handle a 404 or bad city name
- Log before and after the fetch
- Can you output fetched contents to a web page? Something as simple or as complicated as you'd like. 

