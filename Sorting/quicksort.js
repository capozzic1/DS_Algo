// function quickSort(arr, low, high) {
//   if (low < high) {
//     let pi = partition(arr, low, high);
//
//     quickSort(arr, low, pi - 1);
//     quickSort(arr, pi + 1, high);
//
//   }
// }
//
// function partition(arr, low, high) {
//
//   let pivot = arr[high];
//   let i = (low - 1)
//   console.log(i)
//   for (let j = low; j < high; j++) {
//     if (arr[j] <= pivot) {
//       i++;
//       console.log(arr[i], arr[j])
//
//       swap(arr, i, j);
//     }
//   }
//   swap(arr, i + 1, high);
//
//   return (i + 1);
//
// }
//
// function swap(arr, i, j) {
//   let temp = arr[i];
//   arr[i] = arr[j];
//   arr[j] = temp;
//
// }
//low is starting idx, high is ending idx

function qSort(arr, low, high) {
  console.log(arr, low, high);
  if (low < high) {

    let pi = partition(arr, low, high);
    console.log(`${pi} pi`);
    qSort(arr, low, pi - 1);
    qSort(arr, pi + 1, high);
  }
}

function partition(arr, low, high) {

  let pivot = arr[high];

  let i = (low - 1); //smaller element

  // -1 0, 0 1
  for (let j = low; j < high; j++) {
    if (arr[j] <= pivot) {
      i++;

      swap(arr, i, j);

    }
  }
  swap(arr, i + 1, high);

  return i + 1;
}

function swap(arr, i, j) {
  //console.log(i, j)
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

let arr = [
  1,
  5,
  3,
  2,
  200,
  50
] // 1 3 5 6 20 40
let len = arr.length - 1;
qSort(arr, 0, len);
console.log(arr)
