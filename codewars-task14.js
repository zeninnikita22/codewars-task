// Given a 2D ( nested ) list ( array, vector, .. ) of size m * n, your task is to find
//  the sum of the minimum values in each row.

// For Example:

// [ [ 1, 2, 3, 4, 5 ]        #  minimum value of row is 1
// , [ 5, 6, 7, 8, 9 ]        #  minimum value of row is 5
// , [ 20, 21, 34, 56, 100 ]  #  minimum value of row is 20
// ]
// So the function should return 26 because the sum of the minimums is 1 + 5 + 20 = 26.

// Note: You will always be given a non-empty list containing positive values.

const arr = [
  [4, 2, 7, 3, 5],
  [7, 6, 7, 8, 9],
  [50, 22, 34, 56, 100],
];

function sumOfMinimums(arr) {
  const newArray = [];
  for (let i = 0; i < arr.length; i++) {
    newArray.push(arr[i].sort((a, b) => a - b));
  }
  const countingMinimums = newArray.reduce(function (accumulator, current) {
    return accumulator + current[0];
  }, 0);
  return countingMinimums;
}
console.log(sumOfMinimums(arr));
