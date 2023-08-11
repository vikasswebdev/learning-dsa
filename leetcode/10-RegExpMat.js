// Given an input string s and a pattern p, implement regular expression matching with support for '.' and '*' where:
// '.' Matches any single character.​​​​
// '*' Matches zero or more of the preceding element.
// The matching should cover the entire input string (not partial).

/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */

var isMatch = function (s, p) {
  if (p.length === 0) {
    const length = s.length === 0;
    return length;
  }
  const firstMatch = s.length > 0 && (s[0] === p[0] || p[0] === ".");
  if (p.length >= 2 && p[1] === "*") {
    return (
      isMatch(s, p.substring(2)) || (firstMatch && isMatch(s.substring(1), p))
    );
  } else {
    return firstMatch && isMatch(s.substring(1), p.substring(1));
  }
};

let s = "aa";

let p = ".a";

// console.log("match", isMatch(s, p));
