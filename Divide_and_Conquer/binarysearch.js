// for (let i = 0; i <= 100; i++) {
//   arr.push(i)
// }

function bs1(arr, num) {

  let left = 0;

  let right = arr.length - 1;

  //console.log(mid);
  console.log(left);

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (arr[mid] === num) {
      return mid;
    } else if (arr[mid] < num) {
      left = mid - 1;
    } else {
      right = mid + 1;
    }
  }
  return -1;
}

let arr1 = [1, 3, 5, 7, 8];
console.log(bs1(arr1, 3));

// if (arr[m] < x)
//     l = m + 1;
//
//  If x is smaller, ignore right half
// else
//     r = m - 1;

//Recursive solution
// function bs(arr, left, right, num) {
//   if (right < left) {
//     return -1;
//   }
//
//   let mid = Math.floor((left + right) / 2);
//
//   if (arr[mid] === num) {
//     return mid;
//   } else if (arr[mid] > num) {
//     return bs(arr, left, mid - 1, num);
//   } else {
//     return bs(arr, mid + 1, right, num);
//   }
// }

// console.log(bs(arr, 0, arr.length - 1, 8));