export default class GetBorrowedBooksResponse {
  constructor({ userBookBorrows }) {
    this.userBookBorrows = userBookBorrows.map((userBookBorrow) => new UsersBookBorrow(userBookBorrow));
  }
}

class UsersBookBorrow {
  constructor({ userName, bookName, situation }) {
    this.userName = userName;
    this.bookName = bookName;
    this.situation = situation;
  }
}
