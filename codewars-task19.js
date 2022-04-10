// Write a function insert_dash(num) / insertDash(num) /
// InsertDash(int num) that will insert dashes ('-') between each two odd digits in num.
// For example: if num is 454793 the output should be 4547-9-3. Don't count zero as an odd digit.

// Note that the number will always be non-negative (>= 0).

const number = 4547903543;

function insertDash(num) {
  const numArr = num.toString().split("");
  const newArr = [];
  for (let i = 0; i < numArr.length; i++) {
    if (numArr[i] % 2 === 1 && numArr[i + 1] % 2 === 1) {
      newArr.push(numArr[i] + "-");
    } else {
      newArr.push(numArr[i]);
    }
  }
  return newArr.join("");
}
