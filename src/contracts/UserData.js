export class UserData {
  constructor({ accessToken, email, name, surname, registeredAt, nation, role, fines, userBookBorrows, userBookReserves, desires }) {
    this.accessToken = accessToken;
    this.email = email;
    this.name = name;
    this.surname = surname;
    this.registeredAt = registeredAt;
    this.nation = nation;
    this.role = role;
    this.fines = fines;
    this.userBookBorrows = userBookBorrows;
    this.userBookReserves = userBookReserves;
    this.desires = desires;
  }
}
