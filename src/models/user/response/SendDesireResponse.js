import { UserDesireResponse } from "../../auth/authModels";

export default class SendDesireResponse {
  constructor({ message, desires }) {
    this.message = message;
    this.desires = desires.map((desire) => new UserDesireResponse(desire));
  }
}
