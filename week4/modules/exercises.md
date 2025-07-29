## Modules

Modules encapsulate all sorts of code like functions and variables and expose all this to other files. 

Generally, we use it to break our code into separate files to make it more maintainable. Professional code you'll develop will also 

![Start by reading a bit about modules](https://javascript.info/modules-intro)

### Exercise 1

You are creating a small in-browser library system to manage books, users, and borrowing behavior. You’ll break the system into logical modules, exposing only what’s needed through exports.

The project should include at least 3 ES modules, each in a separate file, and one entry file that ties everything together.

----
#### book.js

Purpose: Manage book data.

Define a Book class with:
1. title, author, ISBN, isAvailable
2. a method to toggle availability (checkOut, checkIn)

Export the class as a named export.

-----
#### user.js

Purpose: Manage user data. 

Define a User class with: 
1. name
2. userId
3. borrowedBooks (array of Book instances)

Methods: 
- borrowBook(book) — marks the book unavailable, adds it to user’s borrowed list
- returnBook(book) — marks book available, removes it from borrowed list

Export the class using default export.

------
#### library.js

Purpose: Manage collections and operations.
Maintain two collections: books and users

Functions:
1. addBook(book) — adds a Book instance
2. addUser(user) — adds a User instance
3. getAvailableBooks() — returns list of available books

Export the functions using named exports

Export a libraryStats() function that prints:
- total books
- total users
- how many books are currently checked out

------
#### library.js

Purpose: Tie the system together and simulate usage.

Tasks: 
- Import all modules properly
- Create 3 books and 2 users
- Add them to the system
- Simulate borrowing and returning
- Log current library status


------

### Exercise 2

After implementing **AND COMMITTING** exercise 1 to the repository:

2.1 Move the user ID generation to a separate module (idGenerator.js) that
exports a function like `generateUserID()`

2.2. Try refactoring one module to use dynamic imports

2.3. Add a private `WeakMap` inside the User class to track internal login status

#### For real. Commit the original exercise 1 code, otherwise I won't be able to see it.

------

### Exercise 3

Implement a feature-loading system using ES modules where optional features are dynamically imported at runtime, cached for reuse, and executed only once.

#### Requirements

1. Create separate modules for three “features” (e.g., featureA.js, featureB.js, featureC.js).
Each module should:
- Export a default function that prints a message (e.g., "Feature A initialized").
- Optionally have a small side effect like setting a timestamp or changing a flag.

2. In a main controller module (featureLoader.js):
- Implement a function loadFeature(name) that:
- Dynamically imports the corresponding module (featureA, etc.)
- Caches the module in memory so it’s not re-imported
- Executes the module’s default export (i.e., the initialization function)

3. In main.js:
- Load two features via loadFeature() (e.g., featureA and featureB)
- Then load one again (e.g., featureA) and confirm it does not re-run or re-import
- Log the cache status

#### Constraints

- Do not hardcode all imports — use template literals with dynamic import() paths.
- Use a Map (or WeakMap if appropriate) to store the cache.

### Exercise 4 - Strict Mode

![Read about strict mode](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode)

- What is it? What does it do? (Explain it to me in person)

- Do you need it to implement it in your modules? If so, how do you do it?