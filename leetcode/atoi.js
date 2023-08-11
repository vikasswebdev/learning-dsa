/**
 * @param {string} s
 * @return {number}
 */

const isSigned32bitInteger = (integer) => {
  return integer > Math.pow(2, 31) * -1 && integer < Math.pow(2, 31) - 1;
};

var myAtoi = function (s) {
  s = s.replace(/\s/g, "");
  var arr = [];

  for (let i = 0; i < s.length; i++) {
    const ele = s[i];
    let num = Number(ele);
    if (num) {
      arr.push(num);
    } else if (ele === "-") {
      arr.unshift(ele);
    }
  }

  const a = arr.join("");

  return isSigned32bitInteger(a) ? a : 0;
};

const str = "   -42";
// myAtoi(str);

var myAtoi2 = function (s) {
  let i = 0,
    num = 0,
    sign = 1,
    max = 2 ** 31 - 1,
    min = 2 ** 31 * -1;

  s = s.trim();

  if (s[i] == "-" || s[i] == "+") {
    sign = s[i] == "-" ? -1 : 1;
    i++;
  }

  while (s[i] && s[i].charCodeAt(0) - 48 >= 0 && s[i].charCodeAt(0) - 48 <= 9) {
    num = num * 10 + (s[i].charCodeAt(0) - 48);
    i++;
  }

  num = num * sign;
  return num <= min ? min : num >= max ? max : num;
};

console.log("hrere", myAtoi2("words and 987"));
