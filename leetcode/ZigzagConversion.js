// The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)

/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
  const len = s.length;

  const res = [];

  for (let i = 0; i < numRows; i++) {
    res[i] = new Array(len);
  }

  let sIndex = 0;

  while (sIndex < len) {
    for (let index = 0; index < numRows && sIndex < len; index++) {
      res[index].push(s.charAt(sIndex));
      sIndex++;
    }
    for (let j = numRows - 2; j >= 1 && sIndex < len; j--) {
      res[j].push(s.charAt(sIndex));
      sIndex++;
    }
  }

  let res1 = "";

  for (let i = 0; i < numRows; i++) {
    res1 += res[i].join("");
  }

  return res1;
};

const stri = "PAYPALISHIRING";

const row = 3;

console.log(convert(stri, row));

// /**
//  * @param {string} s
//  * @param {number} numRows
//  * @return {string}
//  */

// Runtime: 352 ms, faster than 5.95% of JavaScript online submissions for ZigZag Conversion.
// Memory Usage: 62.2 MB, less than 5.02% of JavaScript online submissions for ZigZag Conversion.

// export default (s, numRows) => {
//     const len = s.length;
//     const res = [];

//     for (let i = 0; i < numRows; i++) {
//       res[i] = new Array(len);
//     }

//     let sIndex = 0;
//     while (sIndex < len) {
//       for (let index = 0; index < numRows && sIndex < len; index++) {
//         res[index].push(s.charAt(sIndex));
//         sIndex++;
//       }

//       for (let j = numRows - 2; j >= 1 && sIndex < len; j--) {
//         res[j].push(s.charAt(sIndex));
//         sIndex++;
//       }
//     }

//     let res1 = "";
//     for (let i = 0; i < numRows; i++) {
//       res1 += res[i].join("");
//     }
//     return res1;
//   };
