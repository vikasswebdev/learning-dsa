// Input: l1 = [2,4,3], l2 = [5,6,4]
// Output: [7,0,8]
// Explanation: 342 + 465 = 807.

// const addTwoNumbers = () => {
//   var l1 = [2, 4, 3];
//   var l2 = [5, 6, 4];
// };

// java
// class Solution {
//   // Add Two Numbers (Java improved)
//   public ListNode addTwoNumbers(ListNode l1, ListNode l2) {
//       ListNode dummyHead = new ListNode(0);
//       ListNode curr = dummyHead;
//       int carry = 0;
//       while (l1 != null || l2 != null || carry != 0) {
//           int x = (l1 != null) ? l1.val : 0;
//           int y = (l2 != null) ? l2.val : 0;

//           int sum = carry + x + y;

//           carry = sum / 10;
//           curr.next = new ListNode(sum % 10);
//           curr = curr.next;

//           if (l1 != null)
//               l1 = l1.next;
//           if (l2 != null)
//               l2 = l2.next;
//       }
//       return dummyHead.next;
//   }
// }

// function Solution() {
//   var Node = function (element) {
//     this.element = element;
//     this.next = null;
//   };

//   function addTwoNumbers(l1, l2) {
//     let dummyHead = new Node(0);

//     let curr = dummyHead;

//     let carry = 0;

//     while (l1 != null || l2 != null || carry != 0) {
//       let x = l1 != null ? l1 : 0;
//       let y = l2 != null ? l2 : 0;
//       let sum = carry + x + y;
//       carry = sum / 10;

//       curr.next = new Node(sum % 10);
//       curr = curr.next;

//       if (l1 != null) {
//         l1 = l1.next;
//       }

//       if (l2 != null) {
//         l2 = l2.next;
//       }
//     }

//     return dummyHead.next;
//   }
// }

// var addTwoNumbers = (l1, l2) => {
//   var Node = function (element) {
//     this.element = element;
//     this.next = null;
//   };

//   let dummyHead = new Node(0);

//   let curr = dummyHead;

//   let carry = 0;

//   while (l1 != null || l2 != null || carry != 0) {
//     let x = l1 != null ? l1.element : 0;
//     let y = l2 != null ? l2.element : 0;
//     let sum = carry + x + y;
//     carry = sum / 10;

//     curr.next = new Node(sum % 10);
//     curr = curr.next;

//     if (l1 != null) {
//       l1 = l1.next;
//     }

//     if (l2 != null) {
//       l2 = l2.next;
//     }
//   }

//   return dummyHead.next;
// };

const makeLinkedList = (inArr, i) => {
  if (i < 0) return null;
  return { val: inArr[i], next: makeLinkedList(inArr, i - 1) };
};

var addTwoNumbers = function (l1, l2) {
  let sum = 0;
  let i = 1;
  while (l1 || l2) {
    if (l1 && l2) {
      sum = sum + l1.val * i + l2.val * i;
      l1 = l1.next;
      l2 = l2.next;
    } else {
      if (l1) {
        sum = l1.val * i + sum;
        l1 = l1.next;
      }
      if (l2) {
        sum = l2.val * i + sum;
        l2 = l2.next;
      }
    }
    i = i * 10;
  }
  const sumToString = sum.toLocaleString("fullwide", { useGrouping: false });
  return makeLinkedList(sumToString, sumToString.length - 1);
};
