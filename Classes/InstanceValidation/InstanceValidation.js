class CheckingAccount {
  constructor(clientId, email, firstName, lastName) {
    this.clientId = clientId;
    this.email = email;
    this.firstName = firstName;
    this.lastName = lastName;
  }
  set clientId(clientId) {
    if (!/^\d{6}$/g.test(clientId)) {
      throw new TypeError("Client ID must be a 6-digit number");
    }
    return (this._clientId = clientId);
  }
  get clientId() {
    return this._clientId();
  }
  set email(email) {
    let emailPatern = /^[a-zA-Z0-9]+@[a-zA-Z.]+$/g;
    if (!emailPatern.test(email)) {
      throw new TypeError("Invalid e-mail");
    }
    return (this._email = email);
  }
  get email() {
    return this._email;
  }
  set firstName(firstName) {
    if (!(firstName.length >= 3 && firstName.length <= 20)) {
      throw new TypeError(
        "First name must be between 3 and 20 characters long"
      );
    }
    let pattern = /[a-zA-Z]/g;
    if (!pattern.test(firstName)) {
      throw new TypeError("First name must contain only Latin characters");
    }
    return (this._firstName = firstName);
  }
  get firstname() {
    return this._firstName;
  }
  set lastName(lastName) {
    if (!(lastName.length >= 3 && lastName.length <= 20)) {
      throw new TypeError("Last name must be between 3 and 20 characters long");
    }
    let pattern = /[a-zA-Z]/g;
    if (!pattern.test(lastName)) {
      throw new TypeError("Last name must contain only Latin characters");
    }
    return (this._lastName = lastName);
  }
  get lastName() {
    return this._lastName;
  }
}

// let acc = new CheckingAccount("1314", "ivan@some.com", "Ivan", "Petrov");
let acc = new CheckingAccount("131455", "ivan@", "Ivan", "Petrov");
// let acc = new CheckingAccount("131455", "ivan@some.com", "I", "Petrov");
// let acc = new CheckingAccount("131455", "ivan@some.com", "Ivan", "P3trov");
