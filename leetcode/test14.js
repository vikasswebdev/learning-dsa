// Q 48. Rotate Image

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
  const n = matrix.length;
  const rotated = Array(n)
    .fill(null)
    .map(() => Array(n).fill(0));
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      rotated[j][n - i - 1] = matrix[i][j];
    }
  }
  // Copy rotated matrix back to the original matrix
  for (let i = 0; i < n; i++) {
    matrix[i] = rotated[i].slice();
  }
};

const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

// console.log("rotate", rotate(matrix));

// 49. Group Anagrams
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  let map = {};

  for (let str of strs) {
    let s = str.split("").sort().join("");
    if (!map[s]) map[s] = [];
    map[s].push(str);
  }

  return Object.values(map);
};

const strs = ["eat", "tea", "tan", "ate", "nat", "bat"];

// console.log("groupAnagrams", groupAnagrams(strs));

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */

const hasCycle = (head) => {
  let fast = head;
  while (fast && fast.next) {
    head = head.next;
    fast = fast.next.next;
    if (head === fast) return true;
  }
  return false;
};

// 189. Rotate Array
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// var rotate = function (nums, k) {
//   const length = nums.length;
//   const nums1 = nums.slice(0, length - k);
//   const nums2 = nums.slice(length - k, length);

//   const newNums = [...nums2, ...nums1];
// };

/**
 Do not return anything, modify nums in-place instead.
 */
function rotate(nums, k) {
  k = k % nums.length;
  let l = 0;
  let r = nums.length - 1;
  // reverse full given array
  // from [1,2,3,4,5,6,7] to [7,6,5,4,3,2,1]
  nums = reverseArr(nums, l, r);

  // reverse part from 0 to k - 1;
  // from [7,6,5,4,3,2,1] to [5,6,7,4,3,2,1]
  l = 0;
  r = k - 1;
  nums = reverseArr(nums, l, r);

  // reverse part from k to the end;
  // from [5,6,7,4,3,2,1] to [5,6,7,1,2,3,4]
  l = k;
  r = nums.length - 1;
  nums = reverseArr(nums, l, r);
}

function reverseArr(nums, l, r) {
  while (l < r) {
    let temp = nums[l];
    nums[l] = nums[r];
    nums[r] = temp;
    l++;
    r--;
  }

  return nums;
}

let nums = [1, 2, 3, 4, 5, 6, 7],
  k = 3;

// console.log("rotate", rotate(nums, k));

// 1721. Swapping Nodes in a Linked List

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

var swapNodes = function (head, k) {
  if (!head) {
    return null;
  }
  let left = head,
    right = head;
  for (let i = 1; i < k; i++) {
    left = left.next;
  }
  let curr = left;
  while (curr.next) {
    curr = curr.next;
    right = right.next;
  }
  let temp = left.val;
  left.val = right.val;
  right.val = temp;
  return head;
};

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

var swapNodesTwo = function (head, k) {
  let curNode = head;
  let endNode = head;
  let count = 1;
  // Traverse till the kth element.
  while (count < k) {
    curNode = curNode.next;
    count++;
  }
  // store that value in frontNode
  let frontNode = curNode;

  curNode = curNode.next;
  // Continue traversing 'curNode' from the kth node to the end and endNode from the head, till curNode === null;
  while (curNode) {
    curNode = curNode.next;
    endNode = endNode.next;
  }
  // Now the firstNode will have the value in the kth position from the start and endNode will have the value in the kth position from the last
  [frontNode.val, endNode.val] = [endNode.val, frontNode.val];
  return head;
};

// console.log("swapNodesTwo", swapNodesTwo());

// Q. 50. Pow(x, n)
/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */

var myPow = function (x, n) {
  return x ** n;
};

let x = 2.0,
  n = 10;

// console.log("myPow", myPow(x, n));
