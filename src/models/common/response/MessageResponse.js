export default class MessageResponse {
  constructor({ succeeded, message }) {
    this.succeeded = succeeded;
    this.message = message;
  }
}
