export default class AddBookRequest {
  constructor({ name, year, count, pageCount, language, publisher, authors, categories }) {
    this.name = name;
    this.year = year;
    this.count = count;
    this.pageCount = pageCount;
    this.language = language;
    this.publisher = publisher;
    this.authors = authors;
    this.categories = categories;
  }
}
