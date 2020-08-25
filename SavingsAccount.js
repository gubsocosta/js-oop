const { Account } = require("./Account.js")

export class SavingsAccount extends Account {
    constructor(initialBalance, client, agency) {
        super(initialBalance, client, agency)
    }
}