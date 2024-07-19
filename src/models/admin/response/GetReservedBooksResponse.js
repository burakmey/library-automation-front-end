export default class GetReservedBooksResponse {
  constructor({ userBookReserves }) {
    this.userBookReserves = userBookReserves.map((userBookReserve) => new UsersBookReserve(userBookReserve));
  }
}

class UsersBookReserve {
  constructor({ userName, bookName, situation }) {
    this.userName = userName;
    this.bookName = bookName;
    this.situation = situation;
  }
}
