export default class SearchResultResponse {
  constructor({ totalCount, books }) {
    this.totalCount = totalCount;
    this.books = books.map((book) => ({ ...book }));
  }
}
