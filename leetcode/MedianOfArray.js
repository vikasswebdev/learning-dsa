// 4.  Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.
// The overall run time complexity should be O(log (m+n)).

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  let concatArr = nums1.concat(nums2).sort((a, b) => a - b);
  let length = concatArr.length;
  if ((length & 1) == 0) {
    let half = length / 2;
    const e1 = concatArr[half];
    const e2 = concatArr[half - 1];
    let element = e1 + e2;
    element = element / 2;
    console.log("ele", element);
  } else {
    let half = length / 2;
    half = Math.floor(half);
    const element = concatArr[half];
    // return element;
    console.log("ele", element);
  }
};
let a = [1, 2];
let b = [3, 4];
// findMedianSortedArrays(a, b);
