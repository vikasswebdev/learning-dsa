// https://www.geeksforgeeks.org/introduction-to-matrix-or-grid-data-structure-and-algorithms-tutorial/

// javascript Program to print the Diagonals of a Matrix

// Function to print the Principal Diagonal
function printPrincipalDiagonal(mat, n) {
  let s = "";
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      // Condition for principal diagonal
      if (i == j) {
        s += mat[i][j];
        s += " ";
      }
    }
  }
  // console.log("Principal Diagonal: " + s);
}

// Function to print the Secondary Diagonal
function printSecondaryDiagonal(mat, n) {
  let s = "";
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      // Condition for secondary diagonal
      if (i + j == n - 1) {
        s += mat[i][j];
        s += " ";
      }
    }
  }
  console.log("Secondary Diagonal: " + s);
}

// Driver code

let n = 4;
let a = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [1, 2, 3, 4],
  [5, 6, 7, 8],
];

// printPrincipalDiagonal(a, n);
// printSecondaryDiagonal(a, n);

// This code is contributed by garg28harsh.

// sort matrix ***********************************************
// JS implementation to sort the given matrix
// function to sort the given matrix
function sortMat(mat, n) {
  // temporary matrix of size n^2
  let temp = [];
  let k = 0;

  // copy the elements of matrix one by one
  // leto temp[]
  for (let i = 0; i < n; i++) for (let j = 0; j < n; j++) temp[k++] = mat[i][j];

  // sort temp[]
  temp.sort(function (a, b) {
    return b - a;
  });

  // copy the elements of temp[] one by one
  // in mat[][]
  k = 0;
  for (let i = 0; i < n; i++) for (let j = 0; j < n; j++) mat[i][j] = temp[k++];
}

// function to prlet the given matrix
function prletMat(mat, n) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) console.log(mat[i][j]);
  }
}

// Driver program to test above
let mat = [
  [5, 4, 7],
  [1, 3, 8],
  [2, 9, 6],
];
n = 3;
// console.log("Original Matrix:\n");
// prletMat(mat, n);
sortMat(mat, n);
console.log("\nMatrix After Sorting:\n");
prletMat(mat, n);

// This code is contributed by ishankhandelwals.
