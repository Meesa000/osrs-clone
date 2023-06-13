// Osrs text game made by Asim Naqvi.Asim

// This was made in order to test and practice the basics of javascript

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

var input = rl.question("enter your name: ")
console.log(input);