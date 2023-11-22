// Median in a stream of integers (running integers)

const binarySearch = (arr, item, low, high) => {
  if (low >= high) {
    return item > arr[low] ? low + 1 : low;
  }

  let mid = parseInt((low + high) / 2);

  if (item == arr[mid]) return mid + 1;

  if (item > arr[mid]) return binarySearch(arr, item, mid + 1, high);

  return binarySearch(arr, item, low, mid - 1);
};

const printMedian = (arr, n) => {
  let i, j, pos, num;
  let count = 1;

  // document.write(`Median after reading 1 element is ${arr[0]}<br/>`);

  for (i = 1; i < n; i++) {
    let median;
    j = i - 1;
    num = arr[i];

    // find position to insert current element in sorted
    // part of array
    pos = binarySearch(arr, num, 0, j);

    // move elements to right to create space to insert
    // the current element
    while (j >= pos) {
      arr[j + 1] = arr[j];
      j--;
    }

    arr[j + 1] = num;

    // increment count of sorted elements in array
    count++;

    // if odd number of integers are read from stream
    // then middle element in sorted order is median
    // else average of middle elements is median
    if (count % 2 != 0) {
      median = arr[parseInt(count / 2)];
    } else {
      median = (arr[parseInt(count / 2) - 1] + arr[parseInt(count / 2)]) / 2;
    }

    return median;

    // document.write(`Median after reading ${i + 1} elements is ${median}<br/>`);
  }
};

let arr = [5, 15, 1, 3, 2, 8, 7, 9, 10, 6, 11, 4];
let n = arr.length;

// console.log("printMedian", printMedian(arr, n));

//Javascript  code to implement the approach
function streamMed(arr) {
  // Declaring two min heap
  var g = [];
  var s = [];

  for (var i = 0; i < arr.length; i++) {
    // Negation for treating it as max heap
    s.push(-arr[i]);
    s.sort(function (a, b) {
      return a - b;
    });
    g.push(-s.shift());
    g.sort(function (a, b) {
      return a - b;
    });
    if (g.length > s.length) {
      s.unshift(-g.pop());
    }

    if (g.length != s.length) {
      console.log(-s[0]);
    } else {
      console.log((g[0] - s[0]) / 2);
    }
  }
}

// Driver code
var A = [5, 15, 1, 3, 2, 8, 7, 9, 10, 6, 11, 4];
streamMed(A);
