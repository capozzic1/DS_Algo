const readline = require('readline');

process.stdin.setEncoding('utf8');
let rl = readline.createInterface({input: process.stdin});

rl.on('line', readLine);

function readLine(line) {
  let a = parseInt(line.toString().split(' ')[0], 10);
  let b = parseInt(line.toString().split(' ')[1], 10);
  console.log(gcd(a, b));
  process.exit();
}

function gcd(a, b) {
  let result;

  while (b !== 0) {
    result = a % b;
    a = b;
    b = result;
  }
  return a;
}

/*

if (b === 0) {
  return a;
}

a = a % b;

return gcd(b, a);

*/
