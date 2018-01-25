var readline = require('readline');

process.stdin.setEncoding('utf8');
var rl = readline.createInterface({input: process.stdin, terminal: false});

rl.on('line', readLine);

function readLine(line) {
  if (line !== "\n") {
    var a = parseInt(line.toString().split(' ')[0], 10);

    console.log(fibonacci(a));
    process.exit();
  }
}

function fibonacci(n) {
  var arr = [];
  let sum;
  if (!n) {
    return n;
  } else {
    for (var i = 0; i < n; i++) {
      if (!arr.length) {
        arr.push(0, 1);
        continue;
      }
      sum = arr[i] + arr[i - 1]
      arr.push(sum);
    }
  }

  return (arr[arr.length - 1] + 1) % 10;
}
