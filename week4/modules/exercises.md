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

More exercises on modules to be made available tomorrow!