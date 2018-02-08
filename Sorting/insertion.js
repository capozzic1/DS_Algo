//
function iSort(arr) {

  let n = arr.length;

  for (let i = 1; i < n; i++) {
    let key = arr[i];
    let j = i - 1;

    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j -= 1;
    }
    arr[j + 1] = key;
    console.log(arr)
  }
  return arr;
}
let arr = [
  10, 20, 50, 30, //50
  70,
  100,
  1000
];
console.log(iSort(arr))
