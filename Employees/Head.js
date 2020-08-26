import { Employee } from "./Employee.js";

export class Head extends Employee {
    constructor(name, cpf, salary) {
        super(name, cpf, salary);
        this._bonus = 1.1;
    }
}