// Q. 61 - The set [1, 2, 3, ..., n] contains a total of n! unique permutations.

// By listing and labeling all of the permutations in order, we get the following sequence for n = 3:

// "123"
// "132"
// "213"
// "231"
// "312"
// "321"
// Given n and k, return the kth permutation sequence.

// Input: n = 3, k = 3
// Output: "213"

/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */

// var getPermutation = function (n) {

//   for (let i = 0; i < n; i++) {
//     console.log("i", i + 1);
//   }
//   return n;
// };
var getPermutation = function (n, k) {
  const factorials = { 0: 1 };
  let arr = [];
  for (let i = 1; i <= n; i++) {
    arr.push(i);
    factorials[i] = factorials[i - 1] * i;
  }
  const KthComb = [];
  k--;
  while (arr.length > 0) {
    const availableLen = arr.length - 1;
    let swapValue = Math.floor(k / factorials[availableLen]);
    KthComb.push(arr[swapValue]);
    arr.splice(swapValue, 1);
    const remainder = k % factorials[availableLen];
    k = k % factorials[availableLen];
  }

  return KthComb.join("");
};

const n = 3;
const k = 3;

// console.log("getPermutation", getPermutation(n, k));

var getPermutation2 = function (n, k) {
  const factorials = { 0: 1 };

  let arr = [];

  for (let i = 1; i <= n; i++) {
    arr.push(i);
    factorials[i] = factorials[i - 1] * 1;
  }

  const KthComb = [];
  k--;

  while (arr.length > 0) {
    const availableLen = arr.length - 1;
    let swapValue = Math.floor(k / factorials[availableLen]);
    KthComb.push(arr[swapValue]);
    arr.splice(swapValue, 1);
    const remainder = k % factorials[availableLen];
    k = k % factorials[availableLen];
  }

  return KthComb.join("");
};

// console.log("getPermutation", getPermutation2(n, k));

// 61. Rotate List ****************

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function (head, k) {
  if (head === null) return null;
  let listLength = 0;
  let temp = head;
  if (k === 0) return head;
  // get list length
  while (temp) {
    temp = temp.next;
    listLength++;
  }

  // if only single node return head itself
  if (listLength === 1) return head;

  let minrotations = k % listLength; // get the minimum number of nodes to rotate to get the same sequence
  /* For example: 
      For a linked list 1 -> 2 -> 3 -> null.
      Here the length is 3
      1. For the 1 roation:
          - minroation will be :k=1,  1%3 = 1 e.g  3 -> 1 -> 2 -> null.
      2. For the 2 roation:
          - minroation will be :k=2,  2%3 = 2 e.g  2 -> 3 -> 1 -> null.
      3. For the 3 roation:
          - minroation will be :k=3,  3%3 = 0 e.g  1 -> 2 -> 3 -> null.
      4. For the 4 roation:
          - minroation will be :k=4,  4%3 = 1 e.g  3 -> 1 -> 2 -> null. 
      5. For the 5 roation:
          - minroation will be :k=5,  5%3 = 2 e.g  2 -> 3 -> 1 -> null. 
          
      Here after 3 rotations we are getting the same minroation sequence;
      
  */
  // if we get the same number of rotations as of the length of the list , we'll receive the same list again
  if (minrotations === 0) return head;

  // here we'll get the node, from where we need to break the  list
  let nodeToVisit = listLength - minrotations;

  let p1 = head;
  let p2 = head.next;
  let count = 1;

  // loop over until we get to the node
  while (count < nodeToVisit) {
    p1 = p1.next;
    p2 = p2.next;
    count++;
  }
  let resNode = p2;
  p1.next = null; // break the link from the node

  // add the remaining  list to the head of the previous list
  while (p2) {
    if (p2.next === null) {
      p2.next = head;
      break;
    }
    p2 = p2.next;
  }
  return resNode;
};

// console.log("rotateRight", rotateRight(head, kth));

var rotateRight2 = function (head, k) {
  if (head === null) return null;
  let listLength = 0;
  let temp = head;
  if (k === 0) return head;

  // get list length
  while (temp) {
    temp = temp.next;
    listLength++;
  }

  // if only single node return head itself
  if (listLength === 1) return head;

  let minrotations = k % listLength;

  // console.log("minrotations", minrotations);

  // if we get the same number of rotations as of the length of the list , we'll receive the same list again
  if (minrotations === 0) return head;

  // here we'll get the node, from where we need to break the  list
  let nodeToVisit = listLength - minrotations;

  let p1 = head;
  let p2 = head.next;
  let count = 1;

  // loop over until we get to the node
  while (count < nodeToVisit) {
    p1 = p1.next;
    p2 = p2.next;
    count++;
  }

  let resNode = p2;
  p1.next = null; // break the link from the node

  // add the remaining list to the head of the previous list
  while (p2) {
    if (p2.next === null) {
      p2.next = head;
      break;
    }
    p2 = p2.next;
  }
  return resNode;
};

var rotateRight3 = function (head, k) {
  let len = 0,
    dummy = head,
    temp;

  while (dummy) {
    //calculating length of list
    len++;
    dummy = dummy.next;
  }

  if (len < 2)
    //if length is 0 or 1 then no amount shifts would change the order
    return head;

  k = k % len; //important since k can range to 2*10 to power 9 while max len of linked lists is 500

  if (!k)
    //if shifts are 0 then return the original list
    return head;

  dummy = head; // saving head to point to when we reach the end of the linked list

  k++; //incrementing  k so we reach on a place before where head needs to be placed

  while (len - k++)
    //IMPORTANT TO NOTE : IF K SHIFT OCCUR , N-K BECOMES NEW HEAD.
    head = head.next;

  [head.next, head] = [null, head.next]; // assgining the heads next node as null while simultaneously moving head to next

  //If unfamiliar with destructuring or simultaneous assigning used above , use this instead :
  /**
  temp = head.next;
  head.next = null;
  head = temp;
  */

  temp = head; //assigning temp to head to traverse till end

  while (temp.next)
    //looping till we reach the end
    temp = temp.next;

  temp.next = dummy; //pointing the end back to the start

  return head;
};

let head = [1, 2, 3, 4, 5];
let kth = 2;

// console.log("rotateRight", rotateRight3(head, kth));

// 62. Unique Paths *******************

/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function (m, n) {
  const dp = Array.from({ length: m }, () => Array(n).fill(0));

  for (let i = 0; i < m; ++i) {
    dp[i][0] = 1;
  }

  for (let j = 0; j < n; ++j) {
    dp[0][j] = 1;
  }

  for (let i = 1; i < m; ++i) {
    for (let j = 1; j < n; ++j) {
      dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
    }
  }
  console.log("dp", dp);

  return dp[m - 1][n - 1];
};

let mm = 3,
  nn = 7;

// console.log("uniqpath", uniquePaths(mm, nn));

// 63. Unique Paths II

/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
// var uniquePathsWithObstacles = function (obstacleGrid) {
//   return obstacleGrid;
// };

var uniquePathsWithObstacles2 = function (obstacleGrid) {
  if (
    !obstacleGrid.length ||
    !obstacleGrid[0].length ||
    obstacleGrid[0][0] === 1
  ) {
    return 0;
  }

  let m = obstacleGrid.length;
  let n = obstacleGrid[0].length;

  let previous = new Array(n).fill(0);
  let current = new Array(n).fill(0);
  previous[0] = 1;

  for (let i = 0; i < m; i++) {
    current[0] = obstacleGrid[i][0] === 1 ? 0 : previous[0];
    for (let j = 1; j < n; j++) {
      current[j] = obstacleGrid[i][j] === 1 ? 0 : current[j - 1] + previous[j];
    }
    previous = [...current];
  }

  return previous[n - 1];
};

var uniquePathsWithObstacles = (obstacleGrid) => {
  if (
    !obstacleGrid.length ||
    !obstacleGrid[0].length ||
    obstacleGrid[0][0] === 1
  ) {
    return 0;
  }

  let m = obstacleGrid.length;
  let n = obstacleGrid[0].length;

  let previous = new Array(n).fill(0);
  let current = new Array(n).fill(0);
  previous[0] = 1;

  for (let i = 0; i < m; i++) {
    current[0] = obstacleGrid[i][0] === 1 ? 0 : previous[0];
    for (let j = 1; j < n; j++) {
      current[j] = obstacleGrid[i][j] === 1 ? 0 : current[j - 1] + previous[j];
    }
    previous = [...current];
  }

  return previous[n - 1];
};

const obstacleGrid = [
  [0, 0, 0],
  [0, 1, 0],
  [0, 0, 0],
];

// console.log("uniquePathsWithObstacles", uniquePathsWithObstacles(obstacleGrid));

// 64. Minimum Path Sum
// Given a m x n grid filled with non-negative numbers, find a path from top left to bottom right, which minimizes the sum of all numbers along its path.

/**
 * @param {number[][]} grid
 * @return {number}
 */

var minPathSum2 = function (grid) {
  let previousRow = Array(grid[0].length).fill(Infinity);
  previousRow[previousRow.length - 1] = 0;

  for (let row = grid.length - 1; row >= 0; row--) {
    const currentRow = Array(grid[0].length).fill(0);

    for (let col = grid[0].length - 1; col >= 0; col--) {
      const bottomCell = previousRow[col];
      const rightCell = currentRow[col + 1] ?? Infinity;

      currentRow[col] = Math.min(bottomCell, rightCell) + grid[row][col];
    }
    previousRow = currentRow;
  }

  return previousRow[0];
};

var minPathSum = function (grid) {
  let previousRow = Array(grid[0].length).fill(Infinity);
  previousRow[previousRow.length - 1] = 0;

  for (let row = grid.length - 1; row >= 0; row--) {
    const currentRow = Array(grid[0].length).fill(0);
    for (let col = grid[0].length - 1; col >= 0; col--) {
      const bottomCell = previousRow[col];
      const rightCell = currentRow[col + 1] ?? Infinity;
      currentRow[col] = Math.min(bottomCell, rightCell) + grid[row][col];
    }
    previousRow = currentRow;
  }

  return previousRow[0];
};

let grid = [
  [1, 3, 1],
  [1, 5, 1],
  [4, 2, 1],
];

// console.log("minpath", minPathSum(grid));

// 65. Valid Number
/**
 * @param {string} s
 * @return {boolean}
 */
var isNumber = function (s) {
  if (s === "Infinity" || s === "-Infinity" || s === "+Infinity") return false;
  return !isNaN(Number(s));
};

// 66. Plus One

/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  // Convert digits array to a string
  let s = digits.join("");

  // Increment the number represented by the string by 1
  // Using BigInt and 1n to remove the hassle of big integer
  let n = BigInt(s) + 1n;

  // Convert the result back to an array of digits
  return n.toString().split("");
};

const num = [1, 2, 3];

// console.log("plus one ", plusOne(num));

// 67. Add Binary ######
// Given two binary strings a and b, return their sum as a binary string.

/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */

var addBinary = function (a, b) {
  let l1 = a.length;
  let l2 = b.length;
  if (a.length > b.length) {
    let diff = a.length - b.length;
    for (let i = 0; i < diff; i++) {
      b = "0" + b;
    }
  }
  if (a.length < b.length) {
    let diff = b.length - a.length;
    for (let i = 0; i < diff; i++) {
      a = "0" + a;
    }
  }
  let carry = 0;
  let ans = "";
  for (let i = a.length - 1; i >= 0; i--) {
    if (a[i] === "0" && b[i] === "0" && carry === 0) {
      ans = "0" + ans;
    } else if (a[i] === "0" && b[i] === "0" && carry === 1) {
      ans = "1" + ans;
      carry = 0;
    } else if (a[i] === "0" && b[i] === "1" && carry === 1) {
      ans = "0" + ans;
      carry = 1;
    } else if (a[i] === "1" && b[i] === "0" && carry === 1) {
      ans = "0" + ans;
      carry = 1;
    } else if (a[i] === "1" && b[i] === "0" && carry === 0) {
      ans = "1" + ans;
      carry = 0;
    } else if (a[i] === "1" && b[i] === "1" && carry === 1) {
      ans = "1" + ans;
      carry = 1;
    } else if (a[i] === "1" && b[i] === "1" && carry === 0) {
      ans = "0" + ans;
      carry = 1;
    } else if (a[i] === "0" && b[i] === "1" && carry === 0) {
      ans = "1" + ans;
      carry = 0;
    }
  }
  if (carry === 1) {
    ans = "1" + ans;
  }
  return ans;
};

(a = "1010"), (b = "1011");

// console.log("add binary", addBinary(a, b));

// 68. Text Justification *****************

/**
 * @param {string[]} words
 * @param {number} maxWidth
 * @return {string[]}
 */

// Code Modulo-based
var fullJustify2 = function (words, maxWidth) {
  let res = [];
  let cur = [];
  let num_of_letters = 0;

  for (let word of words) {
    if (word.length + cur.length + num_of_letters > maxWidth) {
      for (let i = 0; i < maxWidth - num_of_letters; i++) {
        cur[i % (cur.length - 1 || 1)] += " ";
      }
      res.push(cur.join(""));
      cur = [];
      num_of_letters = 0;
    }
    cur.push(word);
    num_of_letters += word.length;
  }

  let lastLine = cur.join(" ");
  while (lastLine.length < maxWidth) lastLine += " ";
  res.push(lastLine);

  return res;
};

const fullJustify1 = function (words, maxWidth) {
  let res = [];
  let cur = [];
  let num_of_letters = 0;

  for (let word of words) {
    if (word.length + cur.length + num_of_letters > maxWidth) {
      for (let i = 0; i < maxWidth - num_of_letters; i++) {
        cur[i % (cur.length - 1 || 1)] += " ";
      }
      res.push(cur.join(""));
      cur = [];
      num_of_letters = 0;
    }
    cur.push(word);
    num_of_letters += word.length;
  }

  let lastLine = cur.join(" ");
  while (lastLine.length < maxWidth) lastLine += " ";
  res.push(lastLine);
  return res;
};

// Code Gap-based
// var fullJustify = function (words, maxWidth) {
//   let res = [];
//   let curWords = [];
//   let curLen = 0;

//   for (let word of words) {
//     if (curLen + word.length + curWords.length > maxWidth) {
//       let totalSpaces = maxWidth - curLen;
//       let gaps = curWords.length - 1;
//       if (gaps === 0) {
//         res.push(curWords[0] + " ".repeat(totalSpaces));
//       } else {
//         let spacePerGap = Math.floor(totalSpaces / gaps);
//         let extraSpaces = totalSpaces % gaps;
//         let line = "";
//         for (let i = 0; i < curWords.length; i++) {
//           line += curWords[i];
//           if (i < gaps) {
//             line += " ".repeat(spacePerGap);
//             if (i < extraSpaces) {
//               line += " ";
//             }
//           }
//         }
//         res.push(line);
//       }
//       curWords = [];
//       curLen = 0;
//     }
//     curWords.push(word);
//     curLen += word.length;
//   }

//   let lastLine = curWords.join(" ");
//   while (lastLine.length < maxWidth) {
//     lastLine += " ";
//   }
//   res.push(lastLine);

//   return res;
// };

const fullJustify = function (words, maxWidth) {
  let res = [];
  let curWords = [];
  let curLen = 0;
};

const words = ["This", "is", "an", "example", "of", "text", "justification."],
  maxWidth = 16;

// console.log("fullJustify", fullJustify1(words, maxWidth));

// 69. Sqrt(x)

/**
 * @param {number} x
 * @return {number}
 */
function mySqrt(x) {
  // Initialize the lower and upper bounds for potential square roots.
  let low = 0;
  let high = x;

  // Binary search loop to find the square root.
  while (low <= high) {
    // Calculate the midpoint of the current search range.
    const mid = Math.floor((low + high) / 2);

    // Calculate the square of the midpoint.
    const val = mid * mid;

    // Compare the squared midpoint with the target value.
    if (val <= x) {
      // If the squared midpoint is less than or equal to the target,
      // update the lower bound to search on the right side.
      low = mid + 1;
    } else {
      // If the squared midpoint is greater than the target,
      // update the upper bound to search on the left side.
      high = mid - 1;
    }
  }

  // Return the largest integer whose square is less than or equal to x.
  return high;
}

const x = 9;

// console.log("mySqrt", mySqrt(x));

// 70. Climbing Stairs
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  if (n < 2) {
    return 1;
  }

  let firstStep = 1;

  let secondStep = 1;

  let thirdStep = 0;

  for (let i = 2; i <= n; i++) {
    thirdStep = firstStep + secondStep;

    firstStep = secondStep;

    secondStep = thirdStep;
  }
  return thirdStep;
};

let nnn = 10;

// console.log("climbStairs", climbStairs(nnn));

// 71. Simplify Path

/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function (path) {
  const res = [];
  const arr = path.split("/").filter((v) => v);

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "..") {
      res.pop();
    } else if (arr[i] == ".") {
      continue;
    } else {
      res.push(arr[i]);
    }
  }

  return "/" + res.join("/");
};

const path = "/../../home/ubuntu//frontend/";

// console.log("simplifyPath", simplifyPath(path))

// 72. Edit Distance

/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
function minDistance(word1, word2) {
  const m = word1.length;
  const n = word2.length;

  // Create a 2D DP array to store the minimum operations
  const dp = new Array(m + 1).fill(0).map(() => new Array(n + 1).fill(0));

  // Initialize the DP array
  for (let i = 0; i <= m; i++) {
    dp[i][0] = i;
  }
  for (let j = 0; j <= n; j++) {
    dp[0][j] = j;
  }

  // Fill in the DP array
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (word1[i - 1] === word2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1];
      } else {
        dp[i][j] = Math.min(
          dp[i - 1][j] + 1, // Deletion
          dp[i][j - 1] + 1, // Insertion
          dp[i - 1][j - 1] + 1 // Replacement
        );
      }
    }
  }
  console.log("dpdpdpdp", dp);

  return dp[m][n];
}

// Example usage
const word1 = "horse";
const word2 = "ros";
// const result = minDistance(word1, word2);
// console.log(result); // Output: 3

// 73. Set Matrix Zeroes
// Given an m x n integer matrix matrix, if an element is 0, set its entire row and column to 0's.
// You must do it in place.

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */

var setZeroes = function (matrix) {
  let rows = [],
    cols = [];

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === 0) {
        rows.push(i);
        cols.push(j);
      }
    }
  }

  for (let i = 0; i < rows.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      matrix[rows[i]][j] = 0;
    }
  }

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < cols.length; j++) {
      matrix[i][cols[j]] = 0;
    }
  }

  return matrix;
};

let matrix = [
  [1, 1, 1],
  [1, 0, 1],
  [1, 1, 1],
];

// console.log("setZeroes", setZeroes(matrix));

// 74. Search a 2D Matrix

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
  let m = matrix.length;
  let n = matrix[0].length;
  let left = 0,
    right = m * n - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    let mid_val = matrix[Math.floor(mid / n)][mid % n];

    if (mid_val === target) return true;
    else if (mid_val < target) left = mid + 1;
    else right = mid - 1;
  }
  return false;
};

let mat = [
    [1, 3, 5, 7],
    [10, 11, 16, 20],
    [23, 30, 34, 60],
  ],
  target = 3;

// console.log("searchMatrix", searchMatrix(mat, target));

// 75. Sort Colors ***** ***** ******

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
  for (let i = nums.length - 1; i > 0; i--) {
    for (let j = 0; j <= i - 1; j++) {
      if (nums[j] > nums[j + 1]) {
        let temp = nums[j + 1];
        nums[j + 1] = nums[j];
        nums[j] = temp;
      }
    }
  }
};

const nums = [2, 0, 2, 1, 1, 0];

// console.log("sortColors", sortColors(nums));
