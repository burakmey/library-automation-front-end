export default class GetAllDesiresResponse {
  constructor({ usersDesires }) {
    this.usersDesires = usersDesires.map((usersDesire) => new UsersDesire(usersDesire));
  }
}

class UsersDesire {
  constructor({ id, userName, bookName, desireSituation }) {
    this.id = id;
    this.userName = userName;
    this.bookName = bookName;
    this.desireSituation = desireSituation;
  }
}
