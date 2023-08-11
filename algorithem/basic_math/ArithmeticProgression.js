function compare(a, b) {
  if (a < b) {
    return -1;
  } else if (a > b) {
    return 1;
  } else {
    return 0;
  }
}

function checkIsAP(arr, n) {
  if (n == 1) return true;
  // Sort array
  arr.sort(compare);
  // After sorting, difference between
  // consecutive elements must be same.
  let d = arr[1] - arr[0];
  for (let i = 2; i < n; i++) if (arr[i] - arr[i - 1] != d) return false;
  return true;
}

// Driven Program
let arr = [20, 15, 5, 0, 10];
let n = arr.length;

// console.log(checkIsAP(arr, n));

// (checkIsAP(arr, n)) ? document.write("Yes <br>") : document.write("No <br>");
