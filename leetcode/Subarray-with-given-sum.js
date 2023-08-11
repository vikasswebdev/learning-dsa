// Given an unsorted array A of size N that contains only non-negative integers, find a continuous sub-array which adds to a given number S.
// In case of multiple subarrays, return the subarray which comes first on moving from left to right.

// Input:
// N = 5, S = 12
// A[] = {1,2,3,7,5}
// Output: 2 4
// Explanation: The sum of elements
// from 2nd position to 4th position
// is 12.

class Solution {
  subarraySum(arr, n, s) {
    // for (let i = 0; i < arr.length; i++) {
    //   const element = arr[i];
    //   for (let j = 0; j < arr.length; j++) {
    //     const element = arr[j];
    //     console.log(i, j);
    //   }
    // }

    let b = 6;

    const a = arr.reduce((total, num) => {
      return total + num;
    });

    console.log("a", a);
  }
}

const sol = new Solution();

var a = [1, 2, 3, 4, 5, 6];

sol.subarraySum(a, 6, 3);
