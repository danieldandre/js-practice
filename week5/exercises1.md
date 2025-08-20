For the next set of exercises, we'll be using the following array with data with some of my favourite
and least favourite movies. 

```
[
{ title: 'A New Hope', director: 'George Lucas', yearReleased: 1977, streaming: true},
{ title: 'The Empire Strikes Back', director: 'Irvin Kershner', yearReleased: 1980, streaming: true},
{ title: 'Return of the Jedi', director: 'Richard Marquand', yearReleased: 1983, streaming: true},
{ title: 'The Phantom Menace', director: 'George Lucas', yearReleased: 2002, streaming: true},
{ title: 'Attack of the Clones', director: 'George Lucas', yearReleased: 2005, streaming: false},
{ title: 'Revenge of the Sith', director: 'George Lucas', yearReleased: 2015, streaming: false},
{ title: 'The Force Awakens', director: 'J.J. Abrams', yearReleased: 2015, streaming: true},
{ title: 'The Last Jedi', director: 'Ryan Johnson', yearReleased: 2017, streaming: false},
{ title: 'The Rise of Skywalker', director: 'J.J. Abrams', yearReleased: 2019, streaming: false},
]
```

### Exercise 1 - Function Overloading

There is a concept called Function Overloading, meaning you create multiple functions with the same name but with a different signature. You may also have heard of this concept as "polymorphism" - that the same function may behave in different ways. 

This is a feature that exists in other programming languages - including TypeScript. But since TS compiles to JavaScript, and JavaScript has no type annotations, the implementation is different here than in other languages. 

### Exercise 1.1

Q: What is the difference between "Compile-time Polymorphism" and "Run-time Polymorphism"? 

A: Compile-time polymorphism enforces types to better understand the code and it happens before the code runs, being checked by TypeScript. However this disappears at runtime, the TypeScript types are removed.
Run-time polymorphism allows the program to decide which parts of the code should be execuyted based on the type of the objects at that moment and this happens the JavaScript code is running remaining fully present during runtime.

### Exercise 1.2

In the code snippet below, I have defined two functions with the same name, but not their implementation. 

You will design the implementation of that function that will accept either string or boolean and return an array of movies filtered from the input at the top of this document. 

```
function GetTitles(author: string): string[];
function GetTitles(streaming: boolean): string[];

function GetTitles(...): string[] {
    //implement
}
```

(Create a `getTitles.ts` file to write your code.)

### Exercise 1.3 

You will now define a third function overload and re-design your implementation to fit all three. 

This new function overload should accept both "director" and "streaming" as parameters.

### Exercise 1.4

Now that you’ve seen how function overloading works in TypeScript, let’s explore another key concept: function types.

Function types let us describe the shape of a function - what parameters it takes, and what it returns. This is useful when:
- Passing functions as arguments (callbacks)
- Assigning functions to variables
- Creating APIs or reusable utilities

Create a function type called FilterFunction that describes a function that:
- Takes a movie object
- Returns a boolean

Then, implement a function called filterMovies that:
- Takes an array of movies
- Takes a FilterFunction
- Returns a filtered array


-----------

### Exercise 2 - Interfaces

"When I see a bird that walks like a duck, and swims like a duck and quacks like a duck, I call that bird a duck."

```
interface Duck {
    walk: () => void;
    swim: () => void;
    quack: () => void;
}

let probablyADuck = {
    walk: () => console.log('walking like a duck'),
    swim: () => console.log('swimming like a duck'),
    quack: () => console.log('quacking like a duck')
}

function FlyOverWater(bird: Duck) {}

FlyOverWater(probablyADuck); // Works!
```

Even though we never explicitly defined probablyADuck as a Duck type, since TypeScript checks structure (not explicit types) it is considered compatible!

An interface is:
- defined by the `interface` keyword. 
- Properties are listed with their types (note: you can also specify optional properties using `?`)
- You can provide function signatures as a parameter as well;

```
// e.g. 
interface Book {
    id: number;
    title: string;
    author: string;
    pages?: number;
    markDamaged: (reason:String) => void;
}
```

### Exercise 2.1

1. Implement a Movie Interface
2. Create an instance for each movie in a way similar to this: `const movies: Movie[] = rawMovies as Movie[];`
3. Create the following functions:
- getAllMovies(): returns the Movie array into an object
- GetReviewTitle(): Returns a random string saying if the movie is "good", "bad" or "mid" and a random score from 1 to 10
- PrintMovieInfo(): Will log info about the movies based on the parameters
- Refactor GetTitles to return an array of Movie interfaces instead of an array

----------

### Exercise 3 - Overview

You are designing a basic backend model for a package delivery system (like FedEx or DHL). You’ll define data structures using interfaces, implement reusable logic using function types, and print or filter packages based on their status, weight, destination, etc.

### Exercise 3.1 - Defining our Data Model

1.	Create a file called delivery.ts.
2.	Define an interface called Package with the following properties:
- id: string
- sender: string
- recipient: string
- weightKg: number
- destination: string
- isDelivered: boolean
- deliveryDate?: Date
3. Define a function type called PackageFilter as such: `type PackageFilter = (pkg: Package) => boolean;``
4. Create an array of at least 6–8 package objects that conform to the Package interface. Include a mix of:
- Delivered / undelivered packages
- Different destinations
- Optional deliveryDate for delivered ones

### Exercise 3.2 - Filtering and Delivery Logic

Implement a FilterPackage function: `function filterPackages(packages: Package[], filterFn: PackageFilter): Package[]`

And then implement 3 specific filter functions:
1. isDelivered(pkg: Package): boolean
2. isHeavy(thresholdKg: number): PackageFilter → returns a function
3. goingTo(city: string): PackageFilter → returns a function

Afterwards, use them in code:
```ts
const deliveredPackages = filterPackages(packages, isDelivered);
const heavyPackages = filterPackages(packages, isHeavy(10));
const berlinPackages = filterPackages(packages, goingTo("Berlin"));
```

### Exercise 3.3 - Implement Delivery and Logging Functions

1. Define a function type DeliveryPrinter: `type DeliveryPrinter = (pkg: Package) => string;`
2. Implement printPackages: `function printPackages(packages: Package[], printer: DeliveryPrinter): void`
3. Create at least 2 printer implementations.
- One should print only summary: `[#ID] To: Recipient – Destination``
- One should print full details
```
// e.g.
Package ID: #
To: Recipient (Destination)
Weight: x kg
Status: Delivered / In Transit
```
4. Test both printers using printPackages()

### Exercise 3.4 - Extending Interfaces

You will now create a TrackedPackage interface that extends from your Package previous package interface. 
It should add two new parameters:
- trackingNumber: string;
- checkpoints: string[];

1. Create 3 tracked packages with different checkpoint histories (e.g. ['Warehouse', 'On the Way', 'Local depot'])
2. Write a function: `function hasCheckpoint(pkg: TrackedPackage, checkpoint: string): boolean` that will return true if the checkpoint is included in the package's checkpoints
3. Write another function that will filter for packages that have arrived at a given checkpoint.

```ts
function findPackagesAtCheckpoint(
  packages: TrackedPackage[],
  checkpoint: string
): TrackedPackage[]
```