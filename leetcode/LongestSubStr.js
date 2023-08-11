// 3. Longest Substring Without Repeating Characters

// const lengthOfLongestSubstring = (str) => {
//   let low = 0;
//   let high = 0;
//   const charSet = new Set();
//   let longest = 0;

//   while (high < str.length) {
//     const char = str[high];

//     while (charSet.has(char)) {
//       charSet.delete(str[low]);
//       low += 1;
//     }

//     charSet.add(char);
//     longest = Math.max(longest, charSet.size);

//     high += 1;
//   }

//   return longest;
// };

const lengthOfLongestSubstring = (str) => {
  let low = 0;
  let high = 0;
  const charSet = new Set();
  let longest = 0;

  while (high < str.length) {
    const char = str[high];

    // console.log("char", char);
    while (charSet.has(char)) {
      charSet.delete(str[low]);
      low += 1;
    }

    charSet.add(char);

    longest = Math.max(longest, charSet.size);

    high += 1;
  }

  return longest;
};

console.log(lengthOfLongestSubstring("thhis"));
