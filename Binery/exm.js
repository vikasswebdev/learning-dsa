/* JavaScript Program to search an element
in a sorted and pivoted array*/

/* Standard Binary Search function*/
function binarySearch(arr, low, high, key) {
  if (high < low) return -1;

  let mid = Math.floor((low + high) / 2); /*low + (high - low)/2;*/
  if (key == arr[mid]) return mid;

  if (key > arr[mid]) return binarySearch(arr, mid + 1, high, key);

  // else
  return binarySearch(arr, low, mid - 1, key);
}

/* Function to get pivot. For array 3, 4, 5, 6, 1, 2
it returns 3 (index of 6) */
function findPivot(arr, low, high) {
  // base cases
  if (high < low) return -1;
  if (high == low) return low;

  let mid = Math.floor((low + high) / 2); /*low + (high - low)/2;*/
  if (mid < high && arr[mid] > arr[mid + 1]) return mid;

  if (mid > low && arr[mid] < arr[mid - 1]) return mid - 1;

  if (arr[low] >= arr[mid]) return findPivot(arr, low, mid - 1);

  return findPivot(arr, mid + 1, high);
}

/* Searches an element key in a pivoted
sorted array arr[] of size n */
function pivotedBinarySearch(arr, n, key) {
  let pivot = findPivot(arr, 0, n - 1);

  // If we didn't find a pivot,
  // then array is not rotated at all
  if (pivot == -1) return binarySearch(arr, 0, n - 1, key);

  // If we found a pivot, then first compare with pivot
  // and then search in two subarrays around pivot
  if (arr[pivot] == key) return pivot;

  if (arr[0] <= key) return binarySearch(arr, 0, pivot - 1, key);

  return binarySearch(arr, pivot + 1, n - 1, key);
}

/* Driver program to check above functions */
// Let us search 3 in below array
let arr1 = [5, 6, 7, 8, 9, 10, 1, 2, 3];
let n = arr1.length;
let key = 3;

// console.log("Index of the element is :", pivotedBinarySearch(arr1, n, key));

// Search an element in sorted and rotated
// array using single pass of Binary Search

// Returns index of key in arr[l..h] if
// key is present, otherwise returns -1
function search(arr, l, h, key) {
  if (l > h) return -1;

  let mid = Math.floor((l + h) / 2);
  if (arr[mid] == key) return mid;

  /* If arr[l...mid] is sorted */
  if (arr[l] <= arr[mid]) {
    /* As this subarray is sorted, we can quickly
		check if key lies in half or other half */
    if (key >= arr[l] && key <= arr[mid]) return search(arr, l, mid - 1, key);
    /*If key not lies in first half subarray,
		Divide other half into two subarrays,
		such that we can quickly check if key lies
		in other half */
    return search(arr, mid + 1, h, key);
  }

  /* If arr[l..mid] first subarray is not sorted,
	then arr[mid... h]
	must be sorted subarray */
  if (key >= arr[mid] && key <= arr[h]) return search(arr, mid + 1, h, key);

  return search(arr, l, mid - 1, key);
}

// Driver program
let arr = [4, 5, 6, 7, 8, 9, 1, 2, 3];

let n1 = arr.length;

let key1 = 3;

let i = search(arr, 0, n1 - 1, key1);

if (i != -1) {
  //   document.write("Index: " + i + "\n");
  console.log("Index:", i, "\n");
} else {
  document.write("Key not found");
  console.log("Key not found");
}
