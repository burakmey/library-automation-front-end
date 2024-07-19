import { BorrowedResponse, ReservedResponse, UserDesireResponse } from "../authModels";

export default class LoginResponse {
  constructor({ accessToken, email, name, surname, registeredAt, nation, role, fines, userBookBorrows, userBookReserves, desires }) {
    this.accessToken = accessToken;
    this.email = email;
    this.name = name;
    this.surname = surname;
    this.registeredAt = registeredAt;
    this.nation = nation;
    this.role = role;
    this.fines = fines;
    this.userBookBorrows = userBookBorrows.map((userBookBorrow) => new BorrowedResponse(userBookBorrow));
    this.userBookReserves = userBookReserves.map((userBookReserve) => new ReservedResponse(userBookReserve));
    this.desires = desires.map((desire) => new UserDesireResponse(desire));
  }
}
