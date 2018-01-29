var fs = require('fs'); // file system
var rstream = fs.createReadStream('lootStream.txt');

var str = 0,
  arr;
// using a readStream that we created already
rstream.on('data', function(buf) {
  str += buf.toString();
}).on('end', function() { // done

  arr = str.trim().split('\r\n');
  arr = arr.map((x) => x.split(' ').map((b) => Number(b)));
  console.log(getMaxValue(arr));
});

function getMaxValue(arr) {
  let nWeight = arr.splice(0, 1);
  let n = nWeight[0];
  let weight = nWeight[1];

  for (let i = 0, len = arr.length; i < len; i++) {
    arr[i][2] = arr[i][0] / arr[i][1];
  }

  arr.sort((a, b) => b[2] - a[2]);

  return arr;
}
