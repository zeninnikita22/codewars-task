// Write a function that takes a number and returns a reversed number.
//  ```
//  reverseNumber(1324) → 4231
//  reverseNumber(4422) → 2244
//  ```

const reverseNumber = (number) => {
  const numberToString = String(number);
  const stringToArray = numberToString.split("");
  const reversedArray = stringToArray.reverse();
  const arrayToString = reversedArray.join("");
  const stringToNumber = parseInt(arrayToString);
  return stringToNumber;
};

console.log(reverseNumber(1234));
