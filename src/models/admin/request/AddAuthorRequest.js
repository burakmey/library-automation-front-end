export default class AddAuthorRequest {
  constructor({ authors }) {
    this.authors = authors.map((author) => new Author(author));
  }
}

class Author {
  constructor({ name, country }) {
    this.name = name;
    this.country = country;
  }
}
