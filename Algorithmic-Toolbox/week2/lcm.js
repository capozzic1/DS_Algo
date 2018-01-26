const readline = require('readline');

process.stdin.setEncoding('utf8');

let rl = readline.createInterface({input: process.stdin});

rl.on('line', readLine);

function readLine(line) {
  let a = parseInt(line.toString().split(' ')[0], 10);
  let b = parseInt(line.toString().split(' ')[1], 10);

  console.log(lcm(a, b));
  process.exit();
}

const bigInt = require('big-integer');

function lcm(n1, n2) {

//6, 8
//6 c 12 c 18 c 24 c
let smaller = Math.min(n1, n2);
let bigger = Math.max(n1, n2);
let s1 = smaller;

if (smaller === 1 || bigger === 1){
  return bigInt(s1).value;
}

while (s1 % bigger !== 0){

  s1 = s1 + smaller;

  }
  return bigInt(s1).value;
}
