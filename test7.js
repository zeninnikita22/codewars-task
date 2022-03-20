// Given a list of integers, return the digits that are not present in any of them!

// Example:

// 12, 34, 56, 78  =>  "09"
// 2015, 8, 26     =>  "3479"
// Note: the digits in the resulting string should be sorted.

function unusedDigits(...options) {
  const newArray = [];
  for (let i = 0; i <= 9; i++) {
    if (options.join("").toString().indexOf(i) === -1) {
      newArray.push(i);
    }
  }
  return newArray.join("");
}
