// 51. N-Queens

// The n-queens puzzle is the problem of placing n queens on an n x n chessboard such that no two queens attack each other.
// Given an integer n, return all distinct solutions to the n-queens puzzle. You may return the answer in any order.
// Each solution contains a distinct board configuration of the n-queens' placement, where 'Q' and '.' both indicate a queen and an empty space, respectively.

/**
 * @param {number} n
 * @return {string[][]}
 */

var solveNQueens = function (n) {
  let results = [];
  let board = Array(n);

  for (let i = 0; i < n; i++) {
    board[i] = "";
    for (let j = 0; j < n; j++) {
      board[i] += ".";
    }
  }

  findQueens(board, n, results, 0);

  return results;
};

function findQueens(board, n, results, col) {
  if (col >= n) {
    let newBoard = [...board];
    results.push(newBoard);
    return;
  }

  for (let i = 0; i < n; i++) {
    //******* */
    if (isSafeSpace(board, n, i, col)) {
      board[i] = replaceAt(board[i], col, "Q");
      findQueens(board, n, results, col + 1);
      board[i] = replaceAt(board[i], col, ".");
    }
  }
}

function isSafeSpace(board, n, row, col) {
  // check cols
  for (let i = 0; i < col; i++) {
    if (board[row][i] == "Q") {
      return false;
    }
  }

  // check upper left diag
  for (let i = row, j = col; i >= 0 && j >= 0; i--, j--) {
    if (board[i][j] == "Q") {
      return false;
    }
  }

  //check lower left diag
  for (let i = row, j = col; i < n && j >= 0; i++, j--) {
    if (board[i][j] == "Q") {
      return false;
    }
  }
  return true;
}

function replaceAt(s, index, c) {
  return s.slice(0, index) + c + s.slice(index + 1, s.length);
}

// console.log(solveNQueens(4));

// Q. 52. N-Queens II

// 51 question ke results.lenght karna hai

// Q. 53. Maximum Subarray  ***************
// To find the subarray with the largest sum in the given integer array nums and return its sum, you can use the Kadane's algorithm. Here's an implementation in JavaScript:

function maxSubArray(nums) {
  let currentSum = nums[0];
  let maxSum = nums[0];

  for (let i = 1; i < nums.length; i++) {
    // Choose between extending the current subarray or starting a new subarray from the current element
    currentSum = Math.max(nums[i], currentSum + nums[i]);
    // Update the maximum sum if the current sum is greater
    maxSum = Math.max(maxSum, currentSum);
  }

  return maxSum;
}

// Test the function
// const nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
// const result = maxSubArray(nums);
// console.log(result);

//Q. 54. Spiral Matrix *************************

/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
// var spiralOrder = function (matrix) {
//   // MATRIX[Y][X]
//   //    ---------
//   //Y0 | 1  2  3 |
//   //Y1 | 4  5  6 |
//   //Y2 | 7  8  9 |
//   //    ---------
//   //     X0 X1 X2

//   const yLength = matrix.length,
//     xLength = matrix[0].length;
//   let y = 0,
//     x = 0,
//     count = 0,
//     area = xLength * yLength,
//     bag = [];

//   while (count < area) {
//     for (let i = x; count < area && i < xLength - x; i++) {
//       bag.push(matrix[y][i]);
//       count++;
//     }
//     y++;

//     for (let i = y; count < area && i < yLength - y + 1; i++) {
//       bag.push(matrix[i][xLength - 1 - x]);
//       count++;
//     }
//     x++;

//     for (let i = xLength - 1 - x; count < area && i >= x - 1; i--) {
//       bag.push(matrix[yLength - 1 - (y - 1)][i]);
//       count++;
//     }

//     for (let i = yLength - 1 - y; count < area && i >= y; i--) {
//       bag.push(matrix[i][x - 1]);
//       count++;
//     }
//   }
//   return bag;
// };

var spiralOrder = function (matrix) {
  // MATRIX[Y][X]
  // ---------
  // Y0 | 1  2  3 |
  // Y1 | 4  5  6 |
  // Y2 | 7  8  9 |
  // ---------
  //     X0 X1 X2

  const yLength = matrix.length,
    xLength = matrix[0].length;

  let y = 0,
    x = 0,
    count = 0,
    area = xLength * yLength,
    bag = [];

  while (count < area) {
    for (let i = x; count < area && i < xLength - x; i++) {
      bag.push(matrix[y][i]);
      count++;
    }
    y++;

    for (let i = y; count < area && i < yLength - y + 1; i++) {
      bag.push(matrix[i][xLength - 1 - x]);
      count++;
    }
    x++;

    for (let i = xLength - 1 - x; count < area && i >= x - 1; i--) {
      bag.push(matrix[yLength - 1 - (y - 1)[i]]);
      count++;
    }

    for (let i = yLength - 1 - y; count < area && i >= y; i--) {
      bag.push(matrix[i][x - 1]);
      count++;
    }
  }
  return bag;
};

const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

// console.log("spiralOrder", spiralOrder(matrix));

// 56. Merge Intervals
// Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  if (!intervals || intervals.length === 0) {
    return [];
  }

  let merged = [];

  intervals.sort((a, b) => a[0] - b[0]);

  let mergedInterval = intervals[0];

  for (let i = 1; i < intervals.length; i++) {
    const interval = intervals[i];
    if (interval[0] <= mergedInterval[1]) {
      mergedInterval[1] = Math.max(mergedInterval[1], interval[1]);
    } else {
      merged.push(mergedInterval);
      mergedInterval = interval;
    }
  }

  merged.push(mergedInterval);
  return merged;
};

const intervals = [
  [15, 18],
  [2, 6],
  [8, 10],
  [1, 3],
];

// console.log("merge", merge(intervals));

// 121. Best Time to Buy and Sell Stock
/**
 * @param {number[]} prices
 * @return {number}
 */

const maxProfit = (prices) => {
  let left = 0; // Buy
  let right = 1; // sell
  let max_profit = 0;
  while (right < prices.length) {
    if (prices[left] < prices[right]) {
      let profit = prices[right] - prices[left]; // our current profit

      max_profit = Math.max(max_profit, profit);
    } else {
      left = right;
    }
    right++;
  }
  return max_profit;
};

const prices = [7, 1, 5, 3, 6, 4];
// console.log(maxProfit(prices));

// 57. Insert Interval
/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */

var insert = function (intervals, newInterval) {
  let n = intervals.length;

  if (n === 0) return [newInterval];
  if (newInterval[1] < intervals[0][0]) return [newInterval, ...intervals];
  if (newInterval[0] > intervals[n - 1][1]) return [...intervals, newInterval];

  let res = new Array();
  let i = 0;

  for (i; i < n; i++) {
    let s = newInterval[0];
    if (s > intervals[i][1]) res.push(intervals[i]);
    else if (s >= intervals[i][0] && s <= intervals[i][1]) {
      newInterval[0] = intervals[i][0];
      break;
    } else if (s < intervals[i][0]) {
      break;
    }
  }

  for (i; i < n; i++) {
    let e = newInterval[1];
    if (e >= intervals[i][0] && e <= intervals[i][1]) {
      newInterval[1] = intervals[i][1];
      res.push(newInterval);
      i++;
      break;
    } else if (e > intervals[i][1] && i == n - 1) {
      res.push(newInterval);
    } else if (e < intervals[i][0]) {
      res.push(newInterval);
      break;
    }
  }

  for (i; i < n; i++) {
    res.push(intervals[i]);
  }

  return res;
};

const interval = [
    [1, 3],
    [6, 9],
  ],
  newInterval = [2, 5];

// console.log("insert", insert(interval, newInterval));

// 58. GET LAST WORD LENGTH

var lengthOfLastWord = function (s) {
  let string = s.trim();
  let lengthTotal = string.split(" ").length;

  let lastwordlength = string.split(" ")[lengthTotal - 1];

  return lastwordlength.length;
};

const s = "Hello World";

// console.log("lengthOfLastWord", lengthOfLastWord(s));

// 59. Spiral Matrix II
// Given a positive integer n, generate an n x n matrix filled with elements from 1 to n2 in spiral order.

/**
 * @param {number} n
 * @return {number[][]}
 */
/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix2 = function (n) {
  let save = Array.from(Array(n), () => new Array(n).fill(0));
  let count = 1;
  let left = 0;
  let right = n - 1;
  let bottom = n - 1;
  let top = 0;
  let dir = 0;

  while (count <= n * n) {
    if (dir == 0) {
      for (let i = left; i <= right; i++) {
        save[top][i] = count;
        count++;
      }
      top++;
      dir++;
    }

    if (dir == 1) {
      for (let i = top; i <= bottom; i++) {
        save[i][right] = count;
        count++;
      }
      right--;
      dir++;
    }

    if (dir == 2) {
      for (let i = right; i >= left; i--) {
        save[bottom][i] = count;
        count++;
      }
      bottom--;
      dir++;
    }

    if (dir == 3) {
      for (let i = bottom; i >= top; i--) {
        save[i][left] = count;
        count++;
      }
      left++;
      dir++;
    }
    dir = 0;
  }

  return save;
};

var generateMatrix = function (n) {
  let save = Array.from(Array(n), () => new Array(n).fill(0));
  let count = 1;
  let left = 0;
  let right = n - 1;
  let bottom = n - 1;
  let top = 0;
  let dir = 0;

  while (count <= n * n) {
    if (dir == 0) {
      for (let i = left; i <= right; i++) {
        save[top][i] = count;
        count++;
      }
      top++;
      dir++;
    }

    if (dir == 1) {
      for (let i = top; i <= bottom; i++) {
        save[i][right] = count;
        count++;
      }
      right--;
      dir++;
    }

    if (dir == 2) {
      for (let i = right; i >= left; i--) {
        save[bottom][i] = count;
        count++;
      }
      bottom--;
      dir++;
    }

    if (dir == 3) {
      for (let i = bottom; i >= top; i--) {
        save[i][left] = count;
        count++;
      }
      left++;
      dir++;
    }

    dir = 0;
  }
  return save;
};

const n = 3;

//console.log("generateMatrix", generateMatrix(n));
