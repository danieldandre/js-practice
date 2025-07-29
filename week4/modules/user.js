export class User {
    constructor(name, userId) {
        this.name = name;
        this.userId = userId;
        this.borrowedBooks = [];
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
}