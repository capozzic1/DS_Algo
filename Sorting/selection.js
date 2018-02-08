function sSort(arr) {
  let n = arr.length;

  for (let i = 0; i < n - 1; i++) {
    let min = i;

    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[min]) {
        min = j;
        console.log(arr)
      }

      let temp = arr[min];
      arr[min] = arr[i];
      arr[i] = temp;
    }
  }
  return arr;
}

let arr = [1, 5, 6, 150, 2]

console.log(sSort(arr));
