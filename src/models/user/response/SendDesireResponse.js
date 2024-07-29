import { UserDesireResponse } from "../../auth/AuthModels";

export default class SendDesireResponse {
  constructor({ message, desires }) {
    this.message = message;
    this.desires = desires.map((desire) => new UserDesireResponse(desire));
  }
}
