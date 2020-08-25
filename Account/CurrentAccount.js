import { Account } from "./Account.js";

export class CurrentAccount extends Account {
    static totalAccounts = 0;

    constructor(client, agency) {
        super(0, client, agency);

        CurrentAccount.totalAccounts++;
    }

    withdraw(value) {
        const tax = 1.1;

        return this._withdraw(value, tax);
    }
}