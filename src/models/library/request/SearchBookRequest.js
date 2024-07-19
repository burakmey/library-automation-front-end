export default class SearchBookRequest {
  constructor({ search, page, size }) {
    this.search = search;
    this.page = page;
    this.size = size;
  }
}
