/**
 * @param {number} x
 * @return {number}
 */

const isSigned32bitInteger = (integer) => {
  return integer > Math.pow(2, 31) * -1 && integer < Math.pow(2, 31) - 1;
};

var reverse = function (x) {
  let b = x.toString();

  let c = b.length;
  let d = 0;

  let arr = [];
  while (d < c) {
    let d = b[c - 1];
    arr.push(d);
    c--;
  }

  const isNag = Math.sign(b);
  var e;
  if (isNag == -1) {
    arr.pop();
    e = arr.join("");
    return isSigned32bitInteger(-e) ? -e : 0;
  } else {
    e = arr.join("");

    return isSigned32bitInteger(e) ? e : 0;
  }
};

let a = 1534236469;

// console.log(reverse(a));

// console.log(isSigned32bitInteger(-2023429));
