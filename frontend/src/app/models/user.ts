export class User {
  id: number;
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  password: string;

  constructor() {
    this.username = "";
    this.email = "";
    this.firstName = "";
    this.lastName = "";
    this.password = "";
  }
}
