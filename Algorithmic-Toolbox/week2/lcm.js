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

function lcm(a, b) {
  let s1 = 0,
    s2 = 0,
    len = 3;

  while (len--) {
    s1 += a;
    s2 += b;

    console.log(s1, s2)

  }
  //return s1;
}