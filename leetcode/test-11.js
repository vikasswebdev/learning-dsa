// var maxArea = function (height) {

//   for (let i = 0; i < height.length; i++) {
//     for (let j = 0; j < array.length; j++) {
//       const element = array[j];

//     }
//     const element = height[i];
//     console.log("element", element);
//   }
// };

// const height = [1, 8, 6, 2, 5, 4, 8, 3, 7];

// console.log(maxArea(height));

var maxArea = function (height) {
  const n = height.length;
  let max = 0;
  let left = 0;
  let right = n - 1;

  while (left < right) {
    const area = (right - left) * Math.min(height[left], height[right]);
    // console.log("araa", area);
    max = Math.max(max, area);
    // console.log("max", max);
    if (height[left] < height[right]) left++;
    else right--;
  }
  return max;
};

const height = [1, 8, 6, 2, 5, 4, 8, 3, 7];

console.log(maxArea(height));
