let rlSync = require('readline-sync');
let firstName = rlSync.question("What's your first name?\n");
let lastName = rlSync.question("What's your last name?\n");
let age = rlSync.question('How old are you? ');


age = parseInt(age)

console.log(`Hello, ${firstName} ${lastName}, I am ${age}.`)