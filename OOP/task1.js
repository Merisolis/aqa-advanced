// task1.js
const Book = require('./Book');
const EBook = require('./EBook');

const book1 = new Book('To Kill a Mockingbird', 'Harper Lee', 1960);
const book2 = new Book('1984', 'George Orwell', 1949);
const ebook1 = new EBook('Digital Fortress', 'Dan Brown', 1998, 'PDF');
const ebook2 = new EBook('The Da Vinci Code', 'Dan Brown', 2003, 'EPUB');

book1.printInfo();
book2.printInfo();
ebook1.printInfo();
ebook2.printInfo();

const books = [book1, book2, ebook1, ebook2];
const oldestBook = Book.getOldestBook(books);
console.log('Oldest book:', oldestBook);

const newEBook = EBook.createEBookFromBook(book1, 'MOBI');
newEBook.printInfo();