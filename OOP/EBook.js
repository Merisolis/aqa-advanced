// EBook.js
const Book = require('./Book');

class EBook extends Book {
  constructor(title, author, year, fileFormat) {
    super(title, author, year);
    this.fileFormat = fileFormat;
  }

  printInfo() {
    super.printInfo();
    console.log(`Format: ${this.fileFormat}`);
  }

  static createEBookFromBook(book, fileFormat) {
    return new EBook(book.title, book.author, book.year, fileFormat);
  }

  get fileFormat() {
    return this._fileFormat;
  }

  set fileFormat(value) {
    if (typeof value === 'string') {
      this._fileFormat = value;
    }
  }
}

module.exports = EBook;