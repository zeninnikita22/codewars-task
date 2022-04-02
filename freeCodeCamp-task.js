// TASK - Return an array consisting of the largest number from each provided sub-array.
// For simplicity, the provided array will contain exactly 4 sub-arrays.

const array = [
  [4, 5, 1, 3],
  [13, 27, 18, 26],
  [32, 35, 37, 39],
  [1000, 1001, 857, 1],
];

function largestOfFour(arr) {
  const arrOfBiggest = [];
  for (let sub of arr) {
    sub.sort((a, b) => b - a);
  }
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i][0]);
    arrOfBiggest.push(arr[i][0]);
  }
  return arrOfBiggest;
}
