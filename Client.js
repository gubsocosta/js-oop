export class Client {
    constructor(name, cpf) {
        this._name = name;
        this._cpf = cpf;
    }

    get cpf() {
        return this._cpf;
    }
}