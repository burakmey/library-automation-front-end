export default class ReservedResponse {
  constructor({ reserveDate, borrowDate, reserveDueDate, reserveSituation, bookName, bookId }) {
    this.reserveDate = reserveDate;
    this.borrowDate = borrowDate;
    this.reserveDueDate = reserveDueDate;
    this.reserveSituation = reserveSituation;
    this.bookName = bookName;
    this.bookId = bookId;
  }
}
