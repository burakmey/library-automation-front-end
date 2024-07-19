export default class RegisterRequest {
  constructor({ email, name, surname, countryId, password, confirmPassword }) {
    this.email = email;
    this.name = name;
    this.surname = surname;
    this.countryId = countryId;
    this.password = password;
    this.confirmPassword = confirmPassword;
  }
}
