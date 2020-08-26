import { Client } from './Client.js';
import { Head } from './Employees/Head.js';
import { Director } from './Employees/Director.js';
import { SystemAuth } from './Systems/SystemAuth.js'


const client1 = new Client('Joao', '12345678900');
const head = new Head('Gabriel', '1112223330', 5000);

head.createPassword('123456');

const clientIsLogged = SystemAuth.login(client1, '123');
const headIsLogged = SystemAuth.login(head, '123456');

console.log(clientIsLogged);
console.log(headIsLogged);