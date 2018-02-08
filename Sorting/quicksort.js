function quickSort(arr, low, high) {
  if (low < high) {
    let pi = partition(arr, low, high);

    quickSort(arr, low, pi - 1);
    quickSort(arr, pi + 1, high);

  }
}

function partition(arr, low, high) {

  let pivot = arr[high];
  let i = (low - 1)
  console.log(i)
  for (let j = low; j < high; j++) {
    if (arr[j] <= pivot) {
      i++;
      console.log(arr[i], arr[j])

      swap(arr, i, j);
    }
  }
  swap(arr, i + 1, high);

  return (i + 1);

}

function swap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;

}

let arr = [
  1,
  5,
  40,
  6,
  3,
  20
] // 1 3 5 6 20 40
quickSort(arr, 0, arr.length - 1);
console.log(arr)
