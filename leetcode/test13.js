"use strict";

let a = "5" + 5;

// 38. Count and Say

/**
 * @param {number} n
 * @return {string}
 */

// var countAndSay = function (n) {
//   let result = "";
//   const str = n.toString();

//   for (let i = 0; i < str.length; i++) {
//     const e = str[i];
//   }
// };

// console.log(countAndSay(334));

// var countAndSay = function (n) {
//   let say = "1";
//   while (n > 1) {
//     let count = 0;
//     let next = "";
//     for (let i = 0; i <= say.length; i++) {
//       if (i === say.length || (i > 0 && say[i] !== say[i - 1])) {
//         next += count + say[i - 1];
//         count = 0;
//       }
//       count++;
//     }
//     say = next;
//     n--;
//   }
//   return say;
// };

// var countAndSayTwo = function (n) {
//   let say = "1";
//   while (n > 1) {
//     let count = 0;
//     let next = "";
//     for (let i = 0; i <= say.length; i++) {
//       if (i === say.length || (i > 0 && say[i] !== say[i - 1])) {
//         next += count + say[i - 1];
//         count = 0;
//       }
//       count++;
//     }
//     say = next;
//     n--;
//   }
//   return say;
// };

// console.log("countAndSay", countAndSayTwo(23));

/**
 * @param {number} n
 * @return {string}
 */

// const countAndSayTwo = function (n) {
//   const str = n.toString();
//   let result = "";
//   let i = 0;

//   while (i < str.length) {
//     let count = 0;
//     let next = "";

//     for (let j = 0; j <= str.length; j++) {
//       count++;
//     }

//     result = next;
//     i++;
//   }

//   return result;
// };

// console.log("countAndSay", countAndSayTwo(234));

var countAndSay = function (n) {
  if (n === 1) return "1";

  const current = countAndSay(n - 1);

  let newOutput = "";
  let currentNumber = current[0];
  let count = 0;
  for (let i = 0; i <= current.length; i++) {
    if (current[i] === currentNumber) {
      count++;
    } else if (currentNumber) {
      newOutput += `${count}${currentNumber}`;

      currentNumber = current[i];
      count = 1;
    }
  }
  return newOutput;
};

//console.log("countAndSay", countAndSay(234));

// const countAndSay = function (n) {
//   if (n === 1) return "1";
//   const current = countAndSay(n - 1);

//   let newOutput = "";
//   let currentNumber = current[0];
//   let count = 0;
//   for (let i = 0; i <= current.length; i++) {
//     if (current[i] === currentNumber) {
//       count++;
//     } else if (currentNumber) {
//       newOutput += `${count}${currentNumber}`;
//       currentNumber = current[i];
//       count = 1;
//     }
//   }
//   return newOutput;
// };

// 39. Combination Sum

//Soltion 1
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */

// const combinationSum = (candidates, target) => {
//   const result = [];
//   backtrack(0, [], 0, candidates, target, result);
//   return result;
// };

// const backtrack = (i, tempArray, total, candidates, target, result) => {
//   if (total === target) {
//     result.push([...tempArray]);
//     return;
//   }
//   if (i >= candidates.length || total > target) {
//     return;
//   }
//   tempArray.push(candidates[i]);
//   backtrack(i, tempArray, total + candidates[i], candidates, target, result);

//   tempArray.pop();
//   backtrack(i + 1, tempArray, total, candidates, target, result);
// };

// Solution 2

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */

// var combinationSum = function (candidates, target) {
//   let res = [];
//   let temp = [];
//   let iterate = (index, sum) => {
//     if (sum > target) return;
//     if (sum == target) {
//       res.push([...temp]);
//       return;
//     }
//     for (let i = index; i < candidates.length; i++) {
//       if (candidates[i] > target) continue;
//       temp.push(candidates[i]);
//       iterate(i, sum + candidates[i]);
//       temp.pop();
//     }
//   };
//   iterate(0, 0);
//   return res;
// };

// console.log("combinationSum", combinationSum([2, 3, 6, 7]), 7);

var combinationSum = function (candidates, target) {
  let res = [];
  let tmep = [];

  let iterate = (index, sum) => {
    if (sum > target) return;
    if (sum == target) {
      res.push([...tmep]);
      return;
    }
    for (let i = index; i < candidates.length; i++) {
      if (candidates[i] > target) continue;
      tmep.push(candidates[i]);
      iterate(i, sum + candidates[i]);
      tmep.pop();
    }
  };
  iterate(0, 0);
  return res;
};

// Question - 40. Combination Sum II
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */

// var combinationSum2 = function (c, target) {
//   c.sort((a, b) => a - b);
//   let res = [];
//   let iterate = (index, sum, temp) => {
//     if (sum > target) return;
//     if (sum == target) {
//       res.push(temp);
//       return;
//     }
//     // 1 1 2 5 6 7 10
//     for (let i = index; i < c.length; i++) {
//       if (i != index && c[i] == c[i - 1]) continue;
//       iterate(i + 1, sum + c[i], [...temp, c[i]]);
//     }
//   };
//   iterate(0, 0, []);
//   return res;
// };

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */

var combinationSum2 = function (c, target) {
  c.short((a, b) => a - b);

  let res = [];

  let iterate = (index, sum, tmep) => {
    if (sum > target) return;

    if (sum == target) {
      res.push(tmep);
      return;
    }

    // 1 1 2 5 6 7 10
    for (let i = index; i < c.length; i++) {
      if (i != index && c[i] == c[i - 1]) continue;
      iterate(i + 1, sum, +c[i], [...tmep, c[i]]);
    }
  };

  iterate(0, 0, []);

  return res;
};

// 41. First Missing Positive

/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function (nums) {
  nums = nums.sort((a, b) => a - b);
  let nul = nums.indexOf(0);
  let ans = 0;
  let count = 0;
  for (let i = nul; i < nums.length; i++) {
    if (nums[i] > 0) {
      if (nums[i] != nums[i - 1]) count += 1;
      if (nums[i] != count) return count;
      if (i == nums.length - 1) return nums[i] + 1;
    }
  }
  return 1;
};

// console.log("firstMissingPositive", firstMissingPositive([1, 2, 3, 4, 6]));

var firstMissingPositiveTwo = function (nums) {
  nums = nums.sort((a, b) => a - b);
  let nul = nums.indexOf(0);
  let ans = 0;
  let count = 0;
  for (let i = nul; i < nums.length; i++) {
    if (nums[i] > 0) {
      if (nums[i] != nums[i - 1]) count += 1;
      if (nums[i] != count) return count;
      if (i == nums.length - 1) return nums[i] + 1;
    }
  }
  return 1;
};

// console.log("firstMissingPositive", firstMissingPositiveTwo([6, 1, 5, 2, 3]));

// If you want to take the island, burn the boats!

// 42. Trapping Rain Water ********************************
// Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.

/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
  let n = height.length;
  let left = 0,
    right = n - 1,
    left_max = 0,
    right_max = 0,
    water = 0;
  while (left <= right) {
    if (height[left] <= height[right]) {
      if (height[left] > left_max) left_max = height[left];
      else water += left_max - height[left];
      left++;
    } else {
      if (height[right] > right_max) right_max = height[right];
      else water += right_max - height[right];
      right--;
    }
  }
  return water;
};

const trapTwo = function (height) {
  let n = height.length;
  let left = 0,
    right = n - 1,
    left_max = 0,
    right_max = 0,
    water = 0;

  while (left <= right) {
    if (height[left] <= height[right]) {
      if (height[left] > left_max) {
        left_max = height[left];
      } else {
        water += left_max - height[left];
      }
      left++;
    } else {
      if (height[right] > right_max) {
        right_max = height[right];
      } else {
        water += right_max - height[right];
      }
      right--;
    }
  }
  return water;
};

const height = [4, 2, 0, 3, 2, 5];

//console.log("trapTwo", trapTwo(height));

//  43. Multiply Strings **************************************

/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */

// Soution 1
var multiply = function (num1, num2) {
  const product = Number(num1) * Number(num2);
  return product.toString();
};

// console.log("multiply", multiply(num1, num2));

var multiplyTwo = function (num1, num2) {
  if (num1 === "0" || num2 === "0") return "0";

  const m = num1.length,
    n = num2.length,
    res = new Array(m + n).fill(0);

  for (let i = m - 1; i >= 0; i--) {
    for (let j = n - 1; j >= 0; j--) {
      const p1 = i + j,
        p2 = i + j + 1;
      let sum = res[p2] + Number(num1[i]) * Number(num2[j]);
      res[p2] = sum % 10;
      res[p1] += Math.floor(sum / 10);
    }
  }
  if (res[0] === 0) res.shift();
  return res.join("");
};

let num1 = "2",
  num2 = "3";

// console.log("multiplyTwo", multiplyTwo(num1, num2));
// 44. Wildcard Matching

// Given an input string (s) and a pattern (p), implement wildcard pattern matching with support for '?' and '*' where:
// '?' Matches any single character.
// '*' Matches any sequence of characters (including the empty sequence).
// The matching should cover the entire input string (not partial).

/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */

const isMatch = function (string, pattern) {
  let s = 0,
    p = 0;
  let starIdx = -1,
    pointer = -1;

  while (s < string.length) {
    if (
      (p < pattern.length && string[s] === pattern[p]) ||
      pattern[p] === "?"
    ) {
      s++;
      p++;
    } else if (p < pattern.length && pattern[p] === "*") {
      starIdx = p;
      pointer = s;
      p++;
    } else if (starIdx === -1) return false;
    else {
      p = starIdx + 1;
      s = pointer + 1;
      pointer = s;
    }
  }
  for (let idx = p; idx < pattern.length; idx++) {
    if (pattern[idx] !== "*") return false;
  }
  return true;
};

// let s = "aa",
//   p = "a";

const isMatchTwo = function (string, pattern) {
  let s = 0,
    p = 0;
  let starIdx = -1;
  pointer = -1;

  while (s < string.length) {
    if (
      (p < pattern.length && string[s] === pattern[p]) ||
      pattern[p] === "?"
    ) {
      s++;
      p++;
    } else if (p < pattern.length && pattern[p] === "*") {
      starIdx = p;
      pointer = s;
      p++;
    } else if (starIdx === -1) return false;
    else {
      p = starIdx + 1;
      s = pointer + 1;
      pointer = s;
    }
  }

  for (let idx = p; idx < pattern.length; idx++) {
    if (pattern[idx] !== "*") return false;
  }
  return true;
};

/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatchThree = function (s, p) {
  var dp = new Array(s.length + 1);

  for (var i = 0; i <= s.length; i++) {
    dp[i] = new Array(p.length + 1);
    dp[i].fill(false);
  }

  dp[0][0] = true;

  for (var j = 1; j <= p.length; j++) {
    if (p.charAt(j - 1) === "*") {
      dp[0][j] = dp[0][j - 1];
    }
  }

  for (var i = 1; i <= s.length; i++) {
    for (var j = 1; j <= p.length; j++) {
      if (p.charAt(j - 1) === "*") {
        dp[i][j] = dp[i][j - 1] || dp[i - 1][j];
      } else if (
        p.charAt(j - 1) === "?" ||
        p.charAt(j - 1) === s.charAt(i - 1)
      ) {
        dp[i][j] = dp[i - 1][j - 1];
      }
    }
  }
  return dp[s.length][p.length];
};

var isMatchThreeTest = function (s, p) {
  var dp = new Array(s.length + 1);
  for (let i = 0; i <= s.length; i++) {
    dp[i] = new Array(p.length + 1);
    dp[i].fill(false);
  }
  dp[0][0] = true;
  for (let j = 1; j <= p.length; j++) {
    if (p.charAt(j - 1) === "*") {
      dp[0][j] = dp[0][j - 1];
    }
  }
  for (let i = 1; i <= s.length; i++) {
    for (let j = 0; j <= p.length; j++) {
      if (p.charAt(j - 1) === "*") {
        dp[i][j] = dp[i][j - 1] || dp[i - 1][j];
      } else if (
        p.charAt(j - 1) === "?" ||
        p.charAt(j - 1) === s.charAt(i - 1)
      ) {
        dp[i][j] = dp[i - 1][j - 1];
      }
    }
  }
  return dp[s.length][p.length];
};

let s = "aaaa",
  p = "a";

// console.log("isMatchThreeTest", isMatchThreeTest(s, p));

// 45. Jump Game II

/**
 * @param {number[]} nums
 * @return {number}
 */

var jump = function (nums) {
  let left = 0;
  let right = 0;
  let res = 0;

  while (right < nums.length - 1) {
    let max = 0;

    for (let i = left; i <= right; i++) {
      max = Math.max(nums[i] + i, max);
    }
    left = right + 1;
    right = max;

    res++;
  }
  return res;
};

// console.log("jump", jump(nums));

var jumpTwo = function (nums) {
  let left = 0;
  let right = 0;
  let res = 0;

  while (right < nums.length - 1) {
    let max = 0;

    for (let i = left; i <= right; i++) {
      max = Math.max(nums[i] + i, max);
    }

    left = right + 1;
    right = max;
    res++;
  }
  return res;
};

const nums = [2, 3, 1, 1, 4];

// console.log("jumpTwo", jumpTwo(nums));

// 46. Permutations

/**
 * @param {number[]} numss
 * @return {number[][]}
 */
var permute = function (nums) {
  // base case, when 0 or 1 element present
  if (nums.length <= 1) return [nums];

  let val = nums.pop();

  let prevRes = permute(nums);

  let result = [];

  for (let res of prevRes) {
    for (let index = 0; index <= res.length; index++) {
      // need to create a copy of the result from the prev result else it will mess up the current res
      let nRes = Array.from(res);
      // using splice to add the removed value at index (index goes from 0 to length, hence it covers all cases)
      nRes.splice(index, 0, val);
      // push the result created to result array
      result.push(nRes);
    }
  }

  // return result that contains all the permutations of nums array
  return result;
};

var permuteTwo = function (letters) {
  let res = [];
  dfs(letters, [], Array(letters.length).fill(false), res);
  return res;
};

function dfs(letters, path, used, res) {
  if (path.length == letters.length) {
    // make a deep copy since otherwise we'd be append the same list over and over
    res.push(Array.from(path));
    return;
  }

  for (let i = 0; i < letters.length; i++) {
    // skip used letters
    if (used[i]) continue;
    // add letter to permutation, mark letter as used
    path.push(letters[i]);
    used[i] = true;
    dfs(letters, path, used, res);
    // remove letter from permutation, mark letter as unused
    path.pop();
    used[i] = false;
  }
}

var permuteThree = function (letters) {
  let res = [];
  dfs(letters, [], Array(letters.length).fill(false), res);
  return res;
};

function dfs(letters, path, used, res) {
  if (path.length == letters.length) {
    res.push(Array.from(path));
    return;
  }

  for (let i = 0; i < letters.length; i++) {
    //skip used latters
    if (used[i]) continue;
    // add letter to permuation, mark, letter as used
    path.push(letters[i]);
    used[i] = true;
    dfs(letters, path, used, res);
    // remove letter from permutaion, mark letter as unused
    path.pop();
    used[i] = false;
  }
}

// console.log("permuteThree", permuteThree(numss));

// 47. Permutations II

// Solution 1
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function (nums) {
  nums.sort((a, b) => a - b);
  let res = [];

  let iterate = (arr, temp) => {
    if (arr.length == 1) {
      res.push([...temp, arr[0]]);
      return;
    }
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] == arr[i - 1]) continue;
      iterate(
        arr.filter((num, idx) => idx != i),
        [...temp, arr[i]]
      );
    }
  };
  iterate(nums, []);
  return res;
};

// Solution 2
/**
 * @param {number[]} nums
 * @return {number[][]}
 */

var permuteUniqueTwo = function (nums) {
  const res = [];
  const countMap = {};
  for (let i = 0; i < nums.length; i++) {
    const curVal = nums[i];
    if (!countMap[curVal]) {
      countMap[curVal] = 1;
    } else {
      countMap[curVal] += 1;
    }
  }
  dfs(nums, [], countMap, res);
  return res;
};

function dfs(nums, path, countMap, res) {
  if (path.length === nums.length) {
    return res.push([...path]);
  }
  for (const num in countMap) {
    const numCount = countMap[num];
    if (numCount === 0) continue;
    path.push(num);
    countMap[num] -= 1;
    dfs(nums, path, countMap, res);
    path.pop();
    countMap[num] += 1;
  }
}

var permuteUniqueThree = function (nums) {
  const res = [];
  const countMap = {};
  for (let i = 0; i < nums.length; i++) {
    const curVal = nums[i];
    if (!countMap[curVal]) {
      countMap[curVal] = 1;
    } else {
      countMap[curVal] += 1;
    }
  }
  dfs(nums, [], countMap, res);
  return res;
};

function dfs(nums, path, countMap, res) {
  if (path.length === nums.length) {
    return res.push([...path]);
  }
  for (const num in countMap) {
    const numCount = countMap[num];
    if (numCount === 0) continue;
    path.push(num);
    countMap[num] -= 1;
    dfs(nums, path, countMap, res);
    path.pop();
    countMap[num] += 1;
  }
}

const numss = [1, 2, 3];

console.log("permuteUniqueThree", permuteUniqueThree(numss));
