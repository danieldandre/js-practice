export class Book {
    constructor(title, author, ISBN) {
        this.title = title;
        this.author = author;
        this.ISBN = ISBN;
        this.isAvailable = true;
    }

    //borrow book
    checkOut() {
        if (!this.isAvailable) {
            return false;
        }
        this.isAvailable = false;
        return true;
    }

    //return book
    checkIn() {
        if (this.isAvailable) {
            return false;
        }
        this.isAvailable = true;
        return true;
    }
}