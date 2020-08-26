import { Client } from "../Client.js.js";

export class Account {
    constructor(initialBalance, client, agency) {
        if(this.constructor === Account) {
            throw new Error('This abstract class can not be instancied');
        }
        this._balance = initialBalance;
        this._client = client;
        this._agency = agency;
    }

    set client(newClient) {
        if(newClient instanceof Client) {
            this._client = newClient;
        }
    }

    get client() {
        return this._client;
    }

    get balance() {
        return this._balance;
    }

    withdraw(value) {
        const tax = 1;
        return this._withdraw(value, tax);
    }

    _withdraw(value, tax) {
        const amountWithdraw = value * tax;

        if(this._balance >= amountWithdraw) {
            this._balance -= amountWithdraw;
            return amountWithdraw;
        }
        return 0;
    }

    deposit(value) {
        this._balance += value;
    }

    transfer(value, account) {
        const amountWithdraw = this.withdraw(value);
        account.deposit(amountWithdraw);
    }

}