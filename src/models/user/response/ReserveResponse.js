import { ReservedResponse } from "../../auth/authModels";

export default class ReserveResponse {
  constructor({ message, reservations }) {
    this.message = message;
    this.reservations = reservations.map((reservation) => new ReservedResponse(reservation));
  }
}
