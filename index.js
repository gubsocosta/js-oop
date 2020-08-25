import { Client } from './Client.js';
import { CurrentAccount } from './CurrentAccount.js';

const client1 = new Client();
const account1 = new CurrentAccount();

client1.name = 'Gabriel Costa';
client1.cpf = '1112223300';

account1.toDeposit(200);
account1.agency = 1001;

console.log(client1);
console.log(account1);