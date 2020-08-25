import { Client } from './Client.js';
import { CurrentAccount } from './CurrentAccount.js';
import { Account } from './Account.js';

const client1 = new Client('Gabriel', '11223344');
const client2 = new Client('Joao', '33221144');

const account1 = new CurrentAccount(client1, 1001);
const account2 = new Account(200, )