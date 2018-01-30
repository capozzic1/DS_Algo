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
  let n = nWeight[0].splice(0,1);
  let weight = nWeight[0].splice(0,1);
  let maxVal = 0,
  knapsack = 0;


  if (n == 1){

    arr[0][2] = arr[0][0]/arr[0][1];
    console.log(arr);
    let vd = arr[0][2];
    maxVal = weight * vd;
    return maxVal;
  //  maxVal = ;
    //console.log(typeof arr[0][1], typeof arr[0][2])
    //return maxVal;
  }

  for (let i = 0; i < n; i++) {

    arr[i][2] = arr[i][0] / arr[i][1];
  }

  arr.sort((a, b) => b[2] - a[2]);

  for(let i = 0; i < n; i++){

    if (arr[i][1] < weight && knapsack < weight){
      maxVal += arr[i][0];
      knapsack += arr[i][1];
    }
  }


  return maxVal;
}
