/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// var twoSum = function (nums, target) {
//   var a, b;

//   for (let i = 0; i < nums.length; i++) {
//     const element = nums[i];
//     for (let j = 0; j < nums.length; j++) {
//       const element2 = nums[j];
//       if (element + element2 === target) {
//         a = nums.findIndex((item) => item === element2);
//         b = nums.findIndex((item) => item === element);

//         if (a === b) {
//           // b = nums.findIndex((item) => item === element) + 1;
//         }
//       }
//     }
//   }

//   console.log([a, b]);
// };

// twoSum(nums, 6);
const nums = [3, 2, 3];

var twoSum = function (nums, target) {
  let array = [];
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      let sum = nums[i] + nums[j];
      if (sum == target) {
        array.push(i);
        array.push(j);
      }
    }
  }
  return array;
};

console.log(twoSum(nums, 6));
