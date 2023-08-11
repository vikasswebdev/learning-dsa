// function selectionSort(arr) {
//   const n = arr.length;

//   for (let i = 0; i < n - 1; i++) {
//     let minIndex = i;

//     // Find the index of the minimum element in the remaining unsorted part
//     for (let j = i + 1; j < n; j++) {
//       if (arr[j] < arr[minIndex]) {
//         minIndex = j;
//       }
//     }

//     // Swap the minimum element with the first unsorted element
//     if (minIndex !== i) {
//       let temp = arr[i];
//       arr[i] = arr[minIndex];
//       arr[minIndex] = temp;
//     }
//   }

//   return arr;
// }

function selectionSort(arr) {
  const n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    // console.log("i", arr[i]);
    let minIndex = i;
    // Find the index of the minimum element in the remaining unsorted part
    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }

    // Swap the minimum element with the first unsorted element
    if (minIndex !== i) {
      let temp = arr[i];
      arr[i] = arr[minIndex];
      arr[minIndex] = temp;
    }
  }

  return arr;
}

// Example usage:
const unsortedArray = [64, 34, 25, 12, 22, 11, 90];

const sortedArray = selectionSort(unsortedArray);

console.log("sortedArray", sortedArray); // Output: [11, 12, 22, 25, 34, 64, 90]

// In this example, the selectionSort function takes an array as input
// and sorts it in ascending order. It iterates through the array, finding
//  the minimum element in the remaining unsorted part and swapping it with
//   the first unsorted element. The process is repeated until the entire
//    array is sorted.
