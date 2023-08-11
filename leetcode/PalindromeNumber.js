/**
 * @param {number} x
 * @return {boolean}
 */

// does not work

// var isPalindrome = function (x) {
//   let str = x.toString();
//   let max = 2 ** 31 - 1,
//     min = 2 ** 31 * -1;
//   if ((str.length & 1) == 0 || str.length == 1) {
//     console.log("false");
//   } else {
//     for (let i = 0; i < str.length; i++) {
//       const element1 = str[i];
//       console.log("ele", element1);
//       for (let j = 0; j < str.length; j--) {
//         const element2 = str[j];
//         console.log(element1, element2);
//       }
//     }
//   }
// };

// isPalindrome(31213);

// work
var isPalindrome2 = function (x) {
  let final = 0;
  let num = x;

  while (num > 0) {
    // Moves last digit from the back
    const lastDigit = num % 10;
    // We start adding it from the front
    final = final * 10 + lastDigit;
    // If don't use Math.floor, we would get an answer of Infinity since it will get smaller but never hit 0.
    num = Math.floor(num / 10);
  }

  return x === final;
};

// console.log("p", isPalindrome2(31213));
