export class UserData {
  constructor({ accessToken, email, name, surname, registeredAt, nation, role }) {
    this.accessToken = accessToken;
    this.email = email;
    this.name = name;
    this.surname = surname;
    this.registeredAt = registeredAt;
    this.nation = nation;
    this.role = role;
  }
}
