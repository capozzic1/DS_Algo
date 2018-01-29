const readline = require('readline');

process.stdin.setEncoding('utf8');
let rl = readline.createInterface({input: process.stdin});

rl.on('line', readLine);

function readLine(line) {

  let a = parseInt(line.toString().split(' ')[0], 10);
  console.log(moneyChange(a));
}

let moneyChange = (n) => {

  let amt = n,
    counter = 0;

  while (amt > 0) {
    if (amt >= 10) {
      amt -= 10;
      counter++;
    } else if (amt >= 5) {
      amt -= 5;
      counter++;
    } else if (amt >= 1) {
      amt -= 1;
      counter++;
    }
  }

  return counter;
}
