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
//226553150 1023473145
function lcm(a, b) {
  var c = bigInt(a).multiply(b).over(gcd(a, b));
  return bigInt(c).toString();
}

function gcd(a, b) {
  if (b === 0) {
    //console.log(`${a} base`)
    return a
  }
  //console.log(`${a},${b} call`)
  return gcd(b, a % b);
}
