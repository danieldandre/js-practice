import { generateUserID } from "./idGenerator.js";

const loginStatusMap = new WeakMap();

export class User {
    #loginStatus;

    constructor(name, userId) {
        this.name = name;
        this.userId = generateUserID();
        this.borrowedBooks = [];
        loginStatusMap.set(this, false);
    }

    borrowBook(book) {
        if (book.checkOut()) {
            this.borrowedBooks.push(book);
            return true;
        }
        return false;
    }

    returnBook (book) {
        const index = this.borrowedBooks.indexOf(book);

        if (index !== -1) {
            book.checkIn();
            this.borrowedBooks.splice(index, 1)
            return true;
        }
        return false;
    }

    login () {
        loginStatusMap.set(this, true);
        console.log(`${this.name} logged in`);
    }

    logout() {
        loginStatusMap.set(this, false);
        console.log(`${this.name} logged out`);
    }

    isLoggedIn() {
        return loginStatusMap.get(this) || false;
    }
}