// Write a function insert_dash(num) / insertDash(num) /
// InsertDash(int num) that will insert dashes ('-') between each two odd digits in num.
// For example: if num is 454793 the output should be 4547-9-3. Don't count zero as an odd digit.

// Note that the number will always be non-negative (>= 0).

const num = "454793";
// const myRegex = /[4]/gi;
// console.log(num.replace(myRegex, "5-"));

const numArr = num.split("");
console.log(numArr);
const newArr = [];

for (let i = 0; i < numArr.length; i++) {
  if (
    numArr[i] % 2 === 1 &&
    numArr[i + 1] % 2 === 1 &&
    numArr[i - 1] % 2 === 1
  ) {
    newArr.push("-" + numArr[i] + "-");
  } else {
    newArr.push(numArr[i]);
  }
}

// console.log(
//   numArr.map((element) => {
//     if (element % 2 === 1) {
//       return element.replace(element, element + "-");
//     } else {
//       return element;
//     }
//   })
// );
