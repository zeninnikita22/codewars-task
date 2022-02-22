/* Given an array of integers.
Return an array, where the first element is the count of positives numbers and the second element is 
sum of negative numbers. 0 is neither positive nor negative.
If the input is an empty array or is null, return an empty array. */

function countPositivesSumNegatives(input) {
  if (input.length === 0 || input === null) {
    return [];
  } else {
    const arrayOfPositives = [];
    const arrayOfNegatives = [];
    for (let i = 0; i < input.length; i++) {
      if (Math.sign(input[i]) === 1) {
        arrayOfPositives.push(input[i]);
      } else if (Math.sign(input[i]) === -1) arrayOfNegatives.push(input[i]);
    }
    const countOfPositives = arrayOfPositives.length;
    const sumOfNegatives = arrayOfNegatives.reduce((prev, curr, i) => {
      return prev + curr;
    }, 0);
    return [countOfPositives, sumOfNegatives];
  }
}

console.log(
  countPositivesSumNegatives([56, 7, 8, , 932, -4, 6, -23, 5, -10, -10, null])
);

// function test(input) {
//     if(input === null) {
//         return []
//     } else {
//         return "not null"
//     }
// }

// console.log(test([]))
