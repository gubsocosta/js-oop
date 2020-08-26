export class Employee {
    constructor(name, cpf, salary) {
        this._name = name;
        this._cpf = cpf;
        this._salary = salary;
        this._bonus = 1;
        this._password;
    }

    get password() {
        return this._password;
    }

    createPassword(password) {
        this._password = password;
    }

    authenticate(password) {
        return this._password === password;
    }
}