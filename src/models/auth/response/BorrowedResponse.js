export default class BorrowedResponse {
  constructor({ borrowDate, returnDate, returnDueDate, borrowSituation, bookName, bookId }) {
    this.borrowDate = borrowDate;
    this.returnDate = returnDate;
    this.returnDueDate = returnDueDate;
    this.borrowSituation = borrowSituation;
    this.bookName = bookName;
    this.bookId = bookId;
  }
}
