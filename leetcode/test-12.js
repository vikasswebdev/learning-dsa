/**
 * @param {number} num
 * @return {string}
 */

// Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

// var intToRoman = function (num) {
//   const symVal = {
//     1: "I",
//     5: "V",
//     10: "X",
//     50: "L",
//     100: "C",
//     500: "D",
//     1000: "M",
//   };

//   var result;

//   const nums = [1, 5, 10, 50, 100, 500, 1000];

//   const sym = ["I", "V", "X", "L", "C", "D", "M"];

//   for (let i = 0; i < nums.length; i++) {
//     const element = nums[i];
//     if (element === num) {
//       result = symVal[element];
//     } else {
//       result = num;
//     }
//   }

//   return result;
// };

// console.log("intToRoman", intToRoman(11));

var intToRoman = function (num) {
  const mapNum = {
    1000: "M",
    500: "D",
    100: "C",
    50: "L",
    10: "X",
    5: "V",
    1: "I",
  };

  const nums = [1000, 500, 100, 50, 10, 5, 1];

  const words = ["M", "D", "C", "L", "X", "V", "I"];

  let r = "";

  for (let i = 0; i < nums.length; i++) {
    if (num >= nums[i]) {
      if (`${num}`[0] === "9") {
        r += words[i + 1] + words[i - 1];
        num %= +("1" + "0".repeat(`${num}`.length - 1));
      } else if (`${num}`[0] === "4") {
        r += words[i] + words[i - 1];
        num %= +("1" + "0".repeat(`${num}`.length - 1));
      } else {
        r += words[i].repeat(parseInt(num / nums[i], 10));
        num %= nums[i];
      }
    }
  }
  return r;
};

// console.log("intToRoman", intToRoman(100));

// 1 - I;
// 2 - II;
// 3 - III;
// 4 - IV;
// 5 - V;
// 6 - VI;
// 7 - VII;
// 8 - VIII
// 9 - IX
// 10 - X
// 11 - XI

//19
// 9
// 999
// 44

var intToRoman = function (num) {
  const mapNum = {
    1000: "M",
    500: "D",
    100: "C",
    50: "L",
    10: "X",
    5: "V",
    1: "I",
  };

  const nums = [1000, 500, 100, 50, 10, 5, 1];

  const words = ["M", "D", "C", "L", "X", "V", "I"];

  let result = "";

  for (let i = 0; i < nums.length; i++) {
    const element = nums[i];
    if (num >= element) {
      if (`${num}`[0] === "9") {
        result += words[i + 1] + words[i - 1];
        num %= +("1" + "0".repeat(`${num}`.length - 1));
        console.log("if");
      } else if (`${num}`[0] === "4") {
        result += words[i] + words[i - 1];
        num %= +("1" + "0".repeat(`${num}`.length - 1));
        console.log("else if");
      } else {
        result += words[i].repeat(parseInt(num / nums[i], 10));
        num %= nums[i];
        console.log("else");
      }
    }
  }
  return result;
};

// console.log(intToRoman(593));

// let a = "a";

// console.log(a.repeat(10));

//

// 13. Roman to Integer ****************

// var romanToInt = function (s) {
//   const mapNum = {
//     1000: "M",
//     500: "D",
//     100: "C",
//     50: "L",
//     10: "X",
//     5: "V",
//     1: "I",
//   };

//   const nums = [1000, 500, 100, 50, 10, 5, 1];

//   const words = ["M", "D", "C", "L", "X", "V", "I"];

//   for (let i = 0; i < s.length; i++) {
//     const element = s[i];
//     let result = "";
//     console.log("element", element);
//   }

//   return s;
// };

// console.log("romanToInt", romanToInt("DXCIII"));
var romanToInt = function (s) {
  const legend = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  let total = 0;

  for (let i = 0; i < s.length; i++) {
    if (legend[s[i]] < legend[s[i + 1]]) {
      total += legend[s[i + 1]] - legend[s[i]];
      i++;
    } else {
      total += legend[s[i]];
    }
  }

  return total;
};

// console.log("romanToInt", romanToInt("x"));

// 14. Longest Common Prefix
// Write a function to find the longest common prefix string amongst an array of strings.
// If there is no common prefix, return an empty string "".

// Input: strs = ["flower","flow","flight"]
// Output: "fl"

/**
 * @param {string[]} strs
 * @return {string}
 */
// var longestCommonPrefix = function (strs) {
//   for (let i = 0; i < strs.length; i++) {
//     const element = strs[i];
//     for (let j = 0; j < element.length; j++) {
//       const element2 = element[j];
//       console.log("ele", element2);
//     }
//     // console.log("ele", element);
//   }
// };

const longestCommonPrefix = (strs) => {
  if (!strs.length) return "";
  let prefix = strs[0];

  for (let i = strs.length; --i; ) {
    for (; strs[i].indexOf(prefix) !== 0; ) {
      prefix = prefix.substring(0, prefix.length - 1);
      if (!prefix.length) return "";
    }
  }
  return prefix;
};

const a = ["flower", "flow", "flight"];

// console.log("longestCommonPrefix", longestCommonPrefix(a));

// Q 15. 3 Sum
// Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.
// Notice that the solution set must not contain duplicate triplets.

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  const res = [];

  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length - 2; i++) {
    if (i === 0 || nums[i] !== nums[i - 1]) {
      let lo = i + 1,
        hi = nums.length - 1,
        sum = 0 - nums[i];
      while (lo < hi) {
        if (nums[lo] + nums[hi] === sum) {
          res.push([nums[i], nums[lo], nums[hi]]);
          while (lo < hi && nums[lo] === nums[lo + 1]) lo++;
          while (lo < hi && nums[hi] === nums[hi - 1]) hi--;
          lo++;
          hi--;
        } else if (nums[lo] + nums[hi] < sum) {
          lo++;
        } else {
          hi--;
        }
      }
    }
  }

  return res;
};

// const nums = [-1, 0, 1, 2, -1, -4];
// console.log("threeSum", threeSum(nums));

// Practice
var threeSumTwo = function (nums) {
  const res = [];

  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length - 2; i++) {
    if (i === 0 || nums[i] !== nums[i - 1]) {
      let lo = i + 1;
      hi = nums.length - 1;
      sum = 0 - nums[i];

      while (lo < hi) {
        if (nums[lo] + nums[hi] === sum) {
          res.push([nums[i], nums[lo], nums[hi]]);
          while (lo < hi && nums[lo] === nums[lo + 1]) lo++;
          while (lo < hi && nums[hi] === nums[hi - 1]) hi--;
          lo++;
          hi--;
        } else if (nums[lo] + nums[hi] < sum) {
          lo++;
        } else {
          hi--;
        }
      }
    }
  }

  return res;
};

// const nums = [-1, 0, 1, 2, -1, -4];
// console.log("threeSumTwo", threeSumTwo(nums));

// Q. 3 Sum Closest

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
// var threeSumClosest = function (nums, target) {
//   let result = nums[0] + nums[1] + nums[nums.length - 1];
//   nums.sort((a, b) => a - b);
//   for (let i = 0; i < nums.length - 2; i++) {
//     let start = i + 1,
//       end = nums.length - 1;
//     while (start < end) {
//       let sum = nums[i] + nums[start] + nums[end];
//       if (sum > target) {
//         end--;
//       } else {
//         start++;
//       }
//       if (Math.abs(sum - target) < Math.abs(result - target)) {
//         result = sum;
//       }
//     }
//   }
//   return result;
// };

// const nums = [-1, 2, 1, -4];

// console.log("nums", threeSumClosest(nums, 1));

var threeSumClosest = function (nums, target) {
  let result = nums[0] + nums[1] + nums[nums.length - 1];
  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length; i++) {
    let start = i + 1,
      end = nums.length - 1;
    while (start < end) {
      let sum = nums[i] + nums[start] + nums[end];
      if (sum > target) {
        end--;
      } else {
        start++;
      }
      if (Math.abs(sum - target) < Math.abs(result - target)) {
        result = sum;
      }
    }
  }
  return result;
};

const nums = [-1, 2, 1, -4];

// 17. Letter Combinations of a Phone Number

/**
 * @param {string} digits
 * @return {string[]}
 */

// var letterCombinations = function (digits) {
//   const result = [];
//   if (!digits) {
//     return result;
//   }

//   const mapping = [
//     "",
//     "",
//     "abc",
//     "def",
//     "ghi",
//     "jkl",
//     "mno",
//     "pqrs",
//     "tuv",
//     "wxyz",
//   ];

//   const combination = new Array(digits.length).fill("");

//   backtrack(result, mapping, combination, digits, 0);

//   return result;
// };

// function backtrack(result, mapping, combination, digits, index) {
//   if (index === digits.length) {
//     result.push(combination.join(""));
//   } else {
//     const letters = mapping[digits.charAt(index) - "0"];
//     for (const letter of letters) {
//       combination[index] = letter;
//       backtrack(result, mapping, combination, digits, index + 1);
//     }
//   }
// }

// console.log("letterCombinations", letterCombinations(121));

var letterCombinations = function (digits) {
  const result = [];
  if (!digits) {
    return result;
  }
  const mapping = [
    "",
    "",
    "abc",
    "def",
    "ghi",
    "jkl",
    "mno",
    "pqrs",
    "tuv",
    "wxyz",
  ];
  const combination = new Array(digits.length).fill("");
  backtrack(result, mapping, combination, digits, 0);
  return result;
};

function backtrack(result, mapping, combination, digits, index) {
  if (index === digits.length) {
    result.push(combination.join(""));
  } else {
    const letters = mapping[digits.charAt(index) - "0"];
    for (const letter of letters) {
      combination[index] = letter;
      backtrack(result, mapping, combination, digits, index + 1);
    }
  }
}

// console.log("letterCombinations", letterCombinations(113));

var letterCombinationsTwo = function (digits) {
  if (digits.length === 0) {
    return [];
  }

  const digitMap = {
    2: ["a", "b", "c"],
    3: ["d", "e", "f"],
    4: ["g", "h", "i"],
    5: ["j", "k", "l"],
    6: ["m", "n", "o"],
    7: ["p", "q", "r", "s"],
    8: ["t", "u", "v"],
    9: ["w", "x", "y", "z"],
  };

  if (digits.length > 1) {
    const firstDigit = digits.slice(0, 1);

    const otherDigits = digits.slice(1);

    const otherLetterCombinations = letterCombinations(otherDigits);

    const firstDigitletters = digitMap[firstDigit];

    let resultArr = [];

    firstDigitletters.forEach((item1) => {
      otherLetterCombinations.forEach((item2) => {
        resultArr.push(item1 + item2);
      });
    });

    return resultArr;
  } else {
    return digitMap[digits];
  }
};

// console.log("letterCombinationsTwo", letterCombinationsTwo(1234));

/**
 * @param {string} digits
 * @return {string[]}
 */
// var letterCombinationsThree = function (digits) {
//   if (digits.length == 0) return [];

//   var ans = [];
//   var data = {
//     2: ["a", "b", "c"],
//     3: ["d", "e", "f"],
//     4: ["g", "h", "i"],
//     5: ["j", "k", "l"],
//     6: ["m", "n", "o"],
//     7: ["p", "q", "r", "s"],
//     8: ["t", "u", "v"],
//     9: ["w", "x", "y", "z"],
//   };

//   function helper(str, index) {
//     if (str.length == digits.length) {
//       ans.push(str);
//     } else {
//       let alpha = data[digits[index]];

//       for (var i = 0; i < alpha.length; i++) {
//         helper(str + alpha[i], index + 1);
//       }
//     }
//   }

//   helper("", 0);

//   return ans;
// };

// console.log("letterCombinationsThree", letterCombinationsThree("23"));

var letterCombinationsThree = function (digits) {
  if (digits.toString().length == 0) return [];

  var ans = [];

  var data = {
    2: ["a", "b", "c"],
    3: ["d", "e", "f"],
    4: ["g", "h", "i"],
    5: ["j", "k", "l"],
    6: ["m", "n", "o"],
    7: ["p", "q", "r", "s"],
    8: ["t", "u", "v"],
    9: ["w", "x", "y", "z"],
  };

  function helper(str, index) {
    if (str.length == digits.length) {
      ans.push(str);
    } else {
      let alpha = data[digits[index]];
      for (var i = 0; i < alpha.length; i++) {
        helper(str + alpha[i], index + 1);
      }
    }
  }

  helper("", 0);
  return ans;
};

// console.log("letterCombinationsThree", letterCombinationsThree("23"));

// 18. 4Sum /***********************************/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */

// var fourSum = function (nums, target) {
//   const res = [];

//   nums.sort((a, b) => a - b);

//   // return nums;
//   for (let i = 0; i < nums.length - 2; i++) {
//     if (i === 0 || nums[i] !== nums[i - 1]) {
//       let lo = i + 1,
//         hi = nums.length - 1,
//         sum = 0 - nums[i];

//       while (lo < hi) {
//         if (nums[lo] + nums[hi] === sum) {
//            res.push()
//         }
//       }
//     }
//   }
// };

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */

var fourSum = function (nums, target) {
  let res = [];
  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length - 3; i++) {
    for (let j = i + 1; j < nums.length - 2; j++) {
      let f = nums[i];
      let s = nums[j];
      let left = j + 1;
      let right = nums.length - 1;
      while (left < right) {
        let sum = f + s + nums[left] + nums[right];
        if (sum < target) left++;
        else if (sum > target) right--;
        else {
          res.push([f, s, nums[left], nums[right]]);
          while (nums[left] == nums[left + 1]) left++;
          while (nums[right] == nums[right - 1]) right--;
          left++;
          right--;
        }
      }
      while (nums[j] == nums[j + 1]) j++;
    }
    while (nums[i] == nums[i + 1]) i++;
  }
  return res;
};

const numss = [1, 0, -1, 0, -2, 2],
  target = 0;

// console.log("fourSum", fourSum(numss, target));

var fourSumTwo = function (nums, target) {
  let res = [];

  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length - 3; i++) {
    for (let j = 0; j < nums.length - 2; j++) {
      let f = nums[i];

      let s = nums[j];

      let left = j + 1;

      let right = nums.length - 1;

      while (left < right) {
        let sum = f + s + nums[left] + nums[right];
        if (sum < target) left++;
        else if (sum > target) right--;
        else {
          res.push([f, s, nums[left], nums[right]]);
          while (nums[left] == nums[left + 1]) left++;
          while (nums[right] == nums[right - 1]) right--;
          left++;
          right--;
        }
      }
      while (nums[j] == nums[j + 1]) j++;
    }
    while (nums[i] == nums[i + 1]) i++;
  }

  return res;
};

// Question 19. Remove Nth Node From End of List
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

var removeNthFromEnd = function (head, n) {
  const node = new ListNode();

  var rep = node;

  var hash = [];

  while (head !== null) {
    hash.push(head.val);
    head = head.next;
  }

  var count = hash.length - n;

  let i = 0;

  while (i < hash.length) {
    if (count !== 0) {
      node.next = new ListNode(hash[i]);
      count--;
      node = node.next;
    } else {
      count += n - 1;
    }
    i++;
  }

  return rep.next;
};

const head = [1, 2, 3, 4, 5],
  n = 2;

// console.log("removeNthFromEnd", removeNthFromEnd(head, n));

var removeNthFromEndTwo = function (head, n) {
  let fast = head,
    slow = head;
  for (let i = 0; i < n; i++) fast = fast.next;
  if (!fast) return head.next;
  while (fast.next) (fast = fast.next), (slow = slow.next);
  slow.next = slow.next.next;
  return head;
};

// console.log("removeNthFromEnd", removeNthFromEndTwo(head, n));

// 20. Valid Parentheses ****************************************
/**
 * @param {string} s
 * @return {boolean}
 */
function leftToRight(char) {
  switch (char) {
    case "(":
      return ")";
    case "[":
      return "]";
    case "{":
      return "}";
  }
}

var isValid = function (string) {
  if (!string) {
    return true;
  }

  // array can be used as a stack
  const stack = [];
  const len = string.length;

  for (let i = 0; i < len; i++) {
    // cache
    const ch = string[i];

    if (ch == "(" || ch == "{" || ch == "[") {
      stack.push(leftToRight(ch));
    } else {
      // If the stack is not empty and the
      // openning parenthesis at the top of the stack does not
      // match the current character, it is invalid
      if (!stack.length || stack.pop() != ch) {
        return false;
      }
    }
  }
  return !stack.length;
};

// console.log("isValid", isValid("this is my string"));

// 21. Merge Two Sorted Lists

/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */

// var mergeTwoLists = function (l1, l2) {
//   if (!l1) return l2;
//   else if (!l2) return l1;
//   else if (l1.val <= l2.val) {
//     l1.next = mergeTwoLists(l1.next, l2);
//     return l1;
//   } else {
//     l2.next = mergeTwoLists(l1, l2.next);
//     return l2;
//   }
// };

var mergeTwoLists = function (l1, l2) {
  if (!l1) return l2;
  else if (!l2) return l1;
  else if (l1.val <= l2.val) {
    l1.next = mergeTwoLists(l1.next, l2);
    return l1;
  } else {
    l2.next = mergeTwoLists(l1, l2.next);
    return l2;
  }
};

const list1 = [1, 2, 4],
  list2 = [1, 3, 4];

// console.log("mergeTwoLists", mergeTwoLists(list1, list2));

// Question - 22. Generate Parentheses => Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

/**
 * @param {number} n
 * @return {string[]}
 */

// var generateParenthesis = function (n) {
//   let res = [];

//   let iterate = (str, open, close) => {
//     if (open > n || close > n || close > open) return;

//     if (str.length == n * 2 && open == close) {
//       res.push(str);
//       return;
//     }

//     iterate(str + "(", open + 1, close);

//     iterate(str + ")", open, close + 1);
//   };

//   iterate("", 0, 0);

//   return res;
// };

var generateParenthesis = function (n) {
  let res = [];
  let iterate = (str, open, close) => {
    if (open > n || close > n || close > open) return;
    if (str.length == n * 2 && open == close) {
      res.push(str);
      return;
    }
    iterate(str + "(", open + 1, close);
    iterate(str + ")", open, close + 1);
  };
  iterate("", 0, 0);
  return res;
};

// console.log("generateParenthesis", generateParenthesis(8));
// 1, 2, 5, 14, 42, 132, 429, 1430

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
// var mergeKLists = function (lists) {
//   return [...lists];
// };

// let listsArr = [
//   [1, 4, 5],
//   [1, 3, 4],
//   [2, 6],
// ];

function mergeKLists(lists) {
  if (lists.length === 0) return null;
  if (lists.length === 1) return lists[0];
  const mid = Math.floor(lists.length / 2);
  const left = mergeKLists(lists.slice(0, mid));
  const right = mergeKLists(lists.slice(mid));
  return merge(left, right);
}

function merge(l1, l2) {
  const dummy = new ListNode(0);

  let curr = dummy;

  while (l1 !== null && l2 !== null) {
    if (l1.val < l2.val) {
      curr.next = l1;
      l1 = l1.next;
    } else {
      curr.next = l2;
      l2 = l2.next;
    }
    curr = curr.next;
  }

  if (l1 !== null) curr.next = l1;

  if (l2 !== null) curr.next = l2;
  return dummy.next;
}

let listsArr = [
  [1, 4, 5],
  [1, 3, 4],
  [2, 6],
];

// console.log("mergeKLists", mergeKLists(listsArr));

function mergeKListsTwo(lists) {
  if (lists.length === 0) return null;
  if (lists.length === 1) return lists[0];
  const mid = Math.floor(lists.length / 2);
  const left = mergeKLists(lists.slice(0, mid));
  const right = mergeKLists(lists.slice(mid));
  return mergeTwo(left, right);
}

function mergeTwo(l1, l2) {
  const dummy = new ListNode(0);

  let curr = dummy;

  while (l1 !== null && l2 !== null) {
    if (l1.val < l2.val) {
      curr.next = l1;
      l1 = l1.next;
    } else {
      curr.next = l2;
      l2 = l2.next;
    }
    curr = curr.next;
  }

  if (l1 !== null) curr.next = l1;
  if (l2 !== null) curr.next = l2;

  return dummy.next;
}

// Questions - 24. Swap Nodes in Pairs

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

var swapPairs = function (head) {
  var current = head,
    prev = null,
    temp,
    node1,
    node2,
    workAround;
  while (current) {
    if (!current.next) {
      break;
    }
    temp = current.next.next; // temp : 3 => 4
    node1 = current; // node1: 1 => 2 => 3 => 4
    node2 = current.next; // node2: 2 => 3 => 4

    node1.next = temp; //  1 => 3 => 4
    node2.next = node1; // node2: 2 => 1 => 3 => 4
    if (prev) {
      prev.next = node2;
    }
    if (!prev) {
      workAround = node2;
    }
    prev = node1;
    current = temp; // jumping by two
  }
  if (workAround) {
    workAround.next = head;
  } else {
    workAround = head;
  }

  return workAround;
};

// console.log("swapPairs", swapPairs(hea));

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

var reverseKGroup = function (head, k) {
  let count = 0;
  let node = head;

  while (node && count != k) {
    node = node.next;
    count++;
  }

  if (count == k) {
    node = reverseKGroup(node, k);
    while (count > 0) {
      let temp = head.next;
      head.next = node;
      node = head;
      head = temp;
      count--;
    }
    head = node;
  }

  return head;
};

// Questions 26. Remove Duplicates from Sorted Array

/**
 * @param {number[]} nums
 * @return {number}
 */

// var removeDuplicates = function (nums) {
//   let ans = 1;
//   for (let i = 1; i < nums.length; ++i)
//     if (nums[i] != nums[i - 1]) {
//       nums[ans] = nums[i];
//       ++ans;
//     }
//   return ans;
// };

// var removeDuplicates = function (nums) {
//   var deduplicatedSet = new Set(nums);
//   var deduplicatedArray = Array.from(deduplicatedSet);
//   for (var i = 0; i < deduplicatedArray.length; i++) {
//     nums[i] = deduplicatedArray[i];
//   }
//   nums.length = deduplicatedArray.length;
//   return nums.length;
// };

// var removeDuplicates = function (nums) {
//   var deduplicatedSet = new Set(nums);
//   var deduplicatedArray = Array.from(deduplicatedSet);
//   for (var i = 0; i < deduplicatedArray.length; i++) {
//     nums[i] = deduplicatedArray[i];
//   }
//   nums.length = deduplicatedArray.length;
//   return nums.length;
// };

var removeDuplicates = function (nums) {
  let ans = 1;
  for (let i = 1; i < nums.length; ++i)
    if (nums[i] != nums[i - 1]) {
      nums[ans] = nums[i];
      ++ans;
    }
  return ans;
};

const numbers = [1, 1, 2];

// console.log("Removeduolicates", removeDuplicates(numbers));

// Question 27. Remove Element

/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  let ans = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] != val) {
      nums[ans] = nums[i];
      ans++;
    }
  }
  return ans;
};

const arr = [1, 1, 2];

// console.log("removeElement", removeElement(arr, 1));

// Qustion 28. Find the Index of the First Occurrence in a String

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */

// var strStr = function(haystack, needle) {
//   let n = haystack.length;
//   let m = needle.length;

//   if (m === 0) return 0; // empty needle

//   for (let i = 0; i <= n - m; i++) {
//       let found = true;
//       for (let j = 0; j < m; j++) {
//           if (haystack[i + j] !== needle[j]) {
//               found = false;
//               break;
//           }
//       }
//       if (found) return i;
//   }
//   return -1; // needle not found
// }

var strStr = function (haystack, needle) {
  let n = haystack.length;
  let m = needle.length;

  if (m === 0) return 0;

  for (let i = 0; i <= n - m; i++) {
    let found = true;
    for (let j = 0; j < m; j++) {
      if (haystack[i + j] !== needle[j]) {
        found = false;
        break;
      }
    }
    if (found) return i;
  }
  return -1;
};

let haystack = "sadbutsad",
  needle = "sad";

// console.log("strStr", strStr(haystack, needle));

// 29. Divide Two Integers

// var divide = function (A, B) {
//   if (A === -2147483648 && B === -1) return 2147483647;
//   let ans = 0,
//     sign = 1;
//   if (A < 0) (A = -A), (sign = -sign);
//   if (B < 0) (B = -B), (sign = -sign);
//   if (A === B) return sign;
//   for (let i = 0, val = B; A >= B; i = 0, val = B) {
//     while (val > 0 && val <= A) val = B << ++i;
//     (A -= B << (i - 1)), (ans += 1 << (i - 1));
//   }
//   return sign < 0 ? -ans : ans;
// };

// console.log("divide", divide(10, 3));

var divide = function (A, B) {
  if (A === -2147483648 && B === -1) return 2147483647;
  let ans = 0,
    sign = 1;

  if (A < 0) (A = -A), (sign = -sign);

  if (B < 0) (B = -B), (sign = -sign);

  if (A === B) return sign;

  for (let i = 0, val = B; A >= B; i = 0, val = B) {
    while (val > 0 && val <= A) val = B << ++i;
    (A -= B << (i - 1)), (ans += 1 << (i - 1));
  }
  return sign < 0 ? -ans : ans;
};

// console.log("divide", divide(10, 3));

// Question 30. Substring with Concatenation of All Words

/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */

// var findSubstring = function (s, words) {
//   let res = [];

//   let wordLength = words[0].length;
//   let wordCount = words.length;
//   let len = wordCount * wordLength; //Length of sliding window

//   let map = {};

//   for (let word of words) map[word] = map[word] + 1 || 1; //Hash word freq

//   for (let i = 0; i < s.length - len + 1; i++) {
//     let sub = s.slice(i, i + len); //Generate substring of sliding window length
//     if (isConcat(sub, map, wordLength)) res.push(i);
//   }

//   return res;
// };

// function isConcat(sub, map, wordLength) {
//   let seen = {};
//   for (let i = 0; i < sub.length; i += wordLength) {
//     let word = sub.slice(i, i + wordLength);
//     seen[word] = seen[word] + 1 || 1;
//   }

//   for (let key in map) {
//     if (map[key] !== seen[key]) return false; //Word freq must match between map and seen
//   }
//   return true;
// }

var findSubstring = function (s, words) {
  let res = [];
  let wordLength = words[0].length;
  let wordCount = words.length;
  let len = wordCount * wordLength; //Length of sliding window
  let map = {};
  for (let word of words) map[word] = map[word] + 1 || 1; //Hash word freq
  for (let i = 0; i < s.length - len + 1; i++) {
    let sub = s.slice(i, i + len); //Generate substring of sliding window length
    if (isConcat(sub, map, wordLength)) res.push(i);
  }
  return res;
};

function isConcat(sub, map, wordLength) {
  let seen = {};
  for (let i = 0; i < sub.length; i += wordLength) {
    let word = sub.slice(i, i + wordLength);
    seen[word] = seen[word] + 1 || 1;
  }

  for (let key in map) {
    if (map[key] !== seen[key]) return false;
  }

  return true;
}

let s = "barfoothefoobarman",
  words = ["foo", "bar"];

// console.log("findSubstring", findSubstring(s, words));

// Question 31. Next Permutation

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// var nextPermutation = function (nums) {
//   for (let i = nums.length - 2; i >= 0; i--) {
//     let currentIndexSwap = i;
//     for (let j = i + 1; j < nums.length; j++) {
//       if (
//         (nums[j] > nums[i] && nums[j] < nums[currentIndexSwap]) ||
//         (nums[j] > nums[currentIndexSwap] && currentIndexSwap === i)
//       ) {
//         currentIndexSwap = j;
//       }
//     }
//     if (i !== currentIndexSwap) {
//       [nums[i], nums[currentIndexSwap]] = [nums[currentIndexSwap], nums[i]];
//       for (let k = i + 1; k < nums.length; k++) {
//         for (let p = k + 1; p < nums.length; p++) {
//           if (nums[p] < nums[k]) {
//             [nums[k], nums[p]] = [nums[p], nums[k]];
//           }
//         }
//       }
//       return nums;
//     }
//   }
//   return nums.sort((a, b) => a - b);
// };

// const mynums = [1, 2, 3];
// console.log("nextPermutation", nextPermutation(mynums));

var nextPermutation = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    let currentIndexSwap = i;
    for (let j = i + 1; j < nums.length; j++) {
      if (
        (nums[j] > nums[i] && nums[j] < nums[currentIndexSwap]) ||
        (nums[j] > nums[currentIndexSwap] && currentIndexSwap === i)
      ) {
        currentIndexSwap = j;
      }
    }
    if (i !== currentIndexSwap) {
      [nums[i], nums[currentIndexSwap]] = [nums[currentIndexSwap], nums[i]];
      for (let k = i + 1; k < nums.length; k++) {
        for (let p = k + 1; p < nums.length; p++) {
          if (nums[p] < nums[k]) {
            [nums[k], nums[p]] = [nums[p], nums[k]];
          }
        }
      }
      return nums;
    }
  }
  return nums.sort((a, b) => a - b);
};

const mynums = [1, 2, 3];

// console.log("nextPermutation", nextPermutation(mynums));

// Q. 32. Longest Valid Parentheses

/**
 * @param {string} s
 * @return {number}
 */

var longestValidParenthesesOne = function (s) {
  // Variable to store the longest valid parentheses
  let count = 0;

  // Left couunter will count the number of '('
  let left = 0;

  // Right counter will count the number of ')'
  let right = 0;

  // Loop through the string from left to right
  // This will take care of extra right parentheses
  for (let i = 0; i < s.length; i++) {
    // current character
    let c = s[i];

    if (c === "(") {
      left++;
    }

    if (c === ")") {
      right++;
    }

    // If both left and right are equal,
    // it means we have a valid substring
    if (left === right) {
      count = Math.max(count, left + right);
    }
    // If right is greater than left,
    // it means we need to set both
    // counters to zero

    if (right > left) {
      left = right = 0;
    }
  }

  // Reset left and right
  left = right = 0;

  // Follow the same approach but now loop the string
  // from right to left. This will take care of extra
  // left parentheses

  for (let i = s.length - 1; i >= 0; i--) {
    // current character
    let c = s[i];

    if (c === "(") {
      left++;
    }

    if (c === ")") {
      right++;
    }

    // If both left and right are equal,
    // it means we have a valid substring

    if (left === right) {
      count = Math.max(count, left + right);
    }

    // If right is greater than left,
    // it means we need to set both
    // counters to zero

    if (left > right) {
      left = right = 0;
    }
  }
  return count;
};

var longestValidParenthesesTwo = function (s) {
  let indexStack = [-1];

  let characterStack = [];

  let maxLength = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] == "(") {
      indexStack.push(i);
      characterStack.push(s[i]);
    } else {
      if (characterStack[characterStack.length - 1] == "(") {
        indexStack.pop();
        characterStack.pop();

        if (maxLength < i - indexStack[indexStack.length - 1]) {
          maxLength = i - indexStack[indexStack.length - 1];
        }
      } else {
        indexStack.push(i);
      }
    }
  }

  return maxLength;
};

var longestValidParenthesesThree = function (s) {
  var length = 0;
  var index = [];
  index.push(-1);

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") {
      index.push(i);
    } else {
      index.pop();
      if (index.length > 0) {
        length = Math.max(length, i - index[index.length - 1]);
      } else {
        index.push(i);
      }
    }
  }
  return length;
};

const ss = "(()";

// console.log("longestValidParenthesesThree", longestValidParenthesesThree(ss));

// Question 33. Search in Rotated Sorted Array
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let start = 0,
    end = nums.length - 1;
  let mid = Math.floor((start + end) / 2);
  while (start <= end) {
    mid = Math.floor((start + end) / 2);

    if (target === nums[mid]) {
      return mid;
    }

    if (nums[start] <= nums[mid]) {
      if (nums[start] <= target && nums[mid] >= target) {
        end = mid - 1;
      } else {
        start = mid + 1;
      }
    } else {
      if (nums[end] >= target && nums[mid] <= target) {
        start = mid + 1;
      } else {
        end = mid - 1;
      }
    }
  }
  return -1;
};

let numsss = [5, 1, 3],
  targett = 5;

// console.log("search", search(numsss, targett));
// Questions 34. Find First and Last Position of Element in Sorted Array

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
  const minIndex = binarySearch(nums, target, false);
  if (minIndex !== -1) {
    let maxIndex = binarySearch(nums, target, true);
    return [minIndex, maxIndex];
  }
  return [-1, -1];
};

function binarySearch(nums, key, findMax) {
  let keyIndex = -1;
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    let middle = Math.floor(left + (right - left) / 2);
    if (key > nums[middle]) {
      left = middle + 1;
    } else if (key < nums[middle]) {
      right = middle - 1;
    } else {
      // equal
      keyIndex = middle;
      if (findMax) {
        // true mean we are looking for max
        left = middle + 1;
      } else {
        // mean looking for min
        right = middle - 1;
      }
    }
  }
  return keyIndex;
}

let numms = [5, 7, 7, 8, 8, 10],
  ttarget = 8;

// 35. Search Insert Position

var searchInsert = function (nums, target) {
  let start = 0,
    end = nums.length - 1;
  let ans = nums.length; // Default answer when target is greater than all elements

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);

    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] < target) {
      start = mid + 1;
    } else {
      ans = mid; // Update the answer to the current index
      end = mid - 1;
    }
  }
  return ans;
};

// console.log("searchInsert", searchInsert(numms, ttarget));

// 36. Valid Sudoku

/**
 * @param {character[][]} board
 * @return {boolean}
 */

var isValidSudoku = function (board) {
  for (let i = 0; i < 9; i++) {
    let row = new Set(),
      col = new Set(),
      box = new Set();

    for (let j = 0; j < 9; j++) {
      let _row = board[i][j];
      let _col = board[j][i];
      let _box =
        board[3 * Math.floor(i / 3) + Math.floor(j / 3)][3 * (i % 3) + (j % 3)];

      if (_row != ".") {
        if (row.has(_row)) return false;
        row.add(_row);
      }
      if (_col != ".") {
        if (col.has(_col)) return false;
        col.add(_col);
      }

      if (_box != ".") {
        if (box.has(_box)) return false;
        box.add(_box);
      }
    }
  }
  return true;
};

var isValidSudokuTwo = function (board) {
  for (let i = 0; i < 9; i++) {
    let row = new Set(),
      col = new Set(),
      box = new Set();

    for (let j = 0; j < 9; j++) {
      let _row = board[i][j];
      let _col = board[j][i];

      let _box =
        board[3 * Math.floor(i / 3) + Math.floor(j / 3)][3 * (i % 3) + (j % 3)];

      if (_row != ".") {
        if (row.has(_row)) return false;
        row.add(_row);
      }

      if (_col != ".") {
        if (col.has(_col)) return false;
        col.add(_col);
      }

      if (_box != ".") {
        if (box.has(_box)) return false;
        box.add(_box);
      }
    }
  }
  return true;
};

const board = [
  ["5", "3", ".", ".", "7", ".", ".", ".", "."],
  ["6", ".", ".", "1", "9", "5", ".", ".", "."],
  [".", "9", "8", ".", ".", ".", ".", "6", "."],
  ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
  ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
  ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
  [".", "6", ".", ".", ".", ".", "2", "8", "."],
  [".", ".", ".", "4", "1", "9", ".", ".", "5"],
  [".", ".", ".", ".", "8", ".", ".", "7", "9"],
];

// console.log("isValidSudoku", isValidSudokuTwo(board));

// 37. Sudoku Solver

/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */

function solveSudoku(board) {
  const n = board.length;
  dfs(board, n);
}

function dfs(board, n) {
  // for every cell in the sudoku
  for (let row = 0; row < n; row++) {
    for (let col = 0; col < n; col++) {
      // if its empty
      if (board[row][col] !== ".") continue;
      // try every number 1-9
      for (let i = 1; i <= 9; i++) {
        const c = i.toString();
        // if that number is valid
        if (isValid(board, row, col, n, c)) {
          board[row][col] = c;
          // continue search for that board, ret true if solution is reached
          if (dfs(board, n)) return true;
        }
      }
      // solution wasnt found for any num 1-9 here, must be a dead end...
      // set the current cell back to empty
      board[row][col] = ".";
      // ret false to signal dead end
      return false;
    }
  }
  // all cells filled, must be a solution
  return true;
}

function isValid(board, row, col, n, c) {
  const blockRow = Math.floor(row / 3) * 3;
  const blockCol = Math.floor(col / 3) * 3;
  for (let i = 0; i < n; i++) {
    if (board[row][i] === c || board[i][col] === c) return false;
    const curRow = blockRow + Math.floor(i / 3);
    const curCol = blockCol + Math.floor(i % 3);
    if (board[curRow][curCol] === c) return false;
  }
  return true;
}

function solveSudokuTwo(board) {
  const n = board.length;
  dfsTwo(board, n);
}

function dfsTwo(board, n) {
  // for every call in the sudoku
  for (let row = 0; row < n; row++) {
    for (let col = 0; col < n; col++) {
      // if its empty
      if (board[row][col] !== ".") continue;
      // try every number 1-9
      for (let i = 0; i < 9; i++) {
        const c = i.toString();
        // if that number is valid
        if (isValidTwo(board, row, col, n, c)) {
          board[row][col] = c;
          // continue search for that board, set true if solution is reached
          if (dfs(board, n)) return true;
        }
      }
      // solution wasnt found for any num 1-9 here, must be a dead end...
      // set the current cell back to empty
      board[row][col] = ".";
      // set Flase to signal dead end
      return false;
    }
  }
  return true;
}

function isValidTwo(board, row, col, n, c) {
  const blockRow = Math.floor(row / 3) * 3;
  const blockCol = Math.floor(col / 3) * 3;
  for (let i = 0; i < n; i++) {
    if (board[row][i] === c || board[i][col] === c) return false;
    const curRow = blockRow + Math.floor(i / 3);
    const curCol = blockCol + Math.floor(i % 3);
    if (board[curRow][curCol] === c) return false;
  }
  return true;
}

// console.log(solveSudokuTwo(board));

var solveSudokuThree = function (board) {
  //     loop over each row
  for (let i = 0; i < board.length; i++) {
    //     loop over each col
    for (let j = 0; j < board[0].length; j++) {
      //check if block is empty
      if (board[i][j] === ".") {
        //if yes fill it by finding a valid number
        for (let k = 1; k <= 9; k++) {
          const num = k.toString();
          //check for valid num
          if (isNumValidThree(i, j, num, board)) {
            //update sudoku
            board[i][j] = num;
            //now check if the updated sudoku is valid ? by checking this sudoku using recursion.
            //if yes return true
            //if no, backtrack changes and try filling it with a different number.

            if (solveSudoku(board) === true) {
              return true;
            } else {
              //                             backtrack
              board[i][j] = ".";
            }
          }
        }
        //                 if no valid num is found return false
        return false;
      }
    }
  }
  //     Sudoku is completely filled hence return true
  return true;
};

//Helper function
function isNumValidThree(row, col, num, board) {
  for (let i = 0; i < 9; i++) {
    if (board[row][i] === num) return false;

    if (board[i][col] === num) return false;

    const currentMatrixRow = Math.floor(row / 3);
    const currentMatrixCol = Math.floor(col / 3);

    const currentRow = 3 * currentMatrixRow + Math.floor(i / 3);
    const currentCol = 3 * currentMatrixCol + (i % 3);

    if (board[currentRow][currentCol] === num) return false;
  }
  return true;
}
