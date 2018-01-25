let readline = require('readline');
process.stdin.setEncoding('utf8');

let rl = readline.createInterface({input: process.stdin});

rl.on('line', readLine);

function readLine(line) {
  //if (line !== '\n') {
  let a = parseInt(line.toString().split(' ')[0], 10);
  //  }

  //call func here
  console.log(fibonacci(a));
  process.exit();
}

function fibonacci(n) {
  var arr = [0, 1];
  let sum = 0;
  if (!n) {
    return n;
  } else {
    for (var i = 1; i < n; i++) {

      sum = (arr[i - 1] + arr[i]) % 10;
      arr.push(sum);
    }
  }
  let result = arr[arr.length - 1];
  return result;
  //return result % 10;
}