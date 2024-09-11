// Book.js
class Book {
    constructor(title, author, year) {
      this.title = title;
      this.author = author;
      this.year = year;
    }
  
    printInfo() {
      console.log(`${this.title} by ${this.author}, published in ${this.year}`);
    }
  
    static getOldestBook(books) {
      return books.reduce((oldest, book) => {
        return book.year < oldest.year ? book : oldest;
      });
    }
  
    get title() {
      return this._title;
    }
  
    set title(value) {
      if (typeof value === 'string') {
        this._title = value;
      }
    }
  
    get author() {
      return this._author;
    }
  
    set author(value) {
      if (typeof value === 'string') {
        this._author = value;
      }
    }
  
    get year() {
      return this._year;
    }
  
    set year(value) {
      if (typeof value === 'number') {
        this._year = value;
      }
    }
  }
  
  module.exports = Book;  