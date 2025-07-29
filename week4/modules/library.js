const users = [];
const books = [];

export function addBook(book) {
    books.push(book);
}

export function addUser(user) {
    users.push(user);
}

export function getAvailableBooks() {
    return books.filter(book => book.isAvailable);
}

export function libraryStats() {
    const totalBooks = books.length;
    const totalUsers = users.length;
    const booksCheckedOut = books.filter(book => !book.isAvailable).length;

    console.log(`Total books: ${totalBooks}`);
    console.log(`Total users: ${totalUsers}`);
    console.log(`Total books checked out: ${booksCheckedOut}`);
}
