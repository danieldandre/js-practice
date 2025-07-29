import { Book } from "./book.js";
import { User } from "./user.js";
import { addBook, addUser, getAvailableBooks, libraryStats } from "./library.js";

//Create books
const book1 = new Book('Os Maias', 'Eça de Queirós', '1234');
const book2 = new Book('Moby-Dick', 'Herman Melville', '5678');
const book3 = new Book('The Illustrated Theory of Everything', 'Stephen Hawking', '0777');

//Create users
const user1 = new User('Edgar Cerveja', '1');
const user2 = new User('Stuggottzz', '2');

//Add books
addBook(book1);
addBook(book2);
addBook(book3);

//Add users
addUser(user1);
addUser(user2);

//simulations

user1.borrowBook(book1);
user2.borrowBook(book3);

getAvailableBooks();

user1.returnBook(book1);

libraryStats();