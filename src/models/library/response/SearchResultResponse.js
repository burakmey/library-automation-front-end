import { GetBookResponse } from "../libraryModels";

export default class SearchResultResponse {
  constructor({ totalCount, books }) {
    this.totalCount = totalCount;
    this.books = books.map((book) => new GetBookResponse(book));
  }
}
