var readlineSync = require('readline-sync');
var colors = require('colors');


var userName = readlineSync.question('Dime tu nombre: '.green);
var response = 'Hola ' + userName + '!';
console.log(response.red);
