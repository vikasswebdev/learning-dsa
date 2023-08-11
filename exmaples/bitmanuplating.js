let a = 4533;

// it takes more procceing
// if (a % 2 === 0) {
//   console.log("even");
// } else {
//   console.log("odd");
// }

// it take low procceing
if ((a & 1) == 0) {
  console.log("even");
} else {
  console.log("oddd");
}
