export class Book {
  constructor({ id, name, year, count, pageCount, language, publisher, bookAuthors, bookCategories }) {
    this.id = id;
    this.name = name;
    this.year = year;
    this.count = count;
    this.pageCount = pageCount;
    this.language = language;
    this.publisher = publisher;
    this.bookAuthors = bookAuthors;
    this.bookCategories = bookCategories;
  }
}
