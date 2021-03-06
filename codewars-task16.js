// Given a string made of digits [0-9],
// return a string where each digit is repeated a number of times equals to its value.

// Examples
// explode("312")
// should return :

// "333122"
// explode("102269")
// should return :

// "12222666666999999999"

function explode(str) {
  return str
    .split("")
    .map((element) => element.repeat(element))
    .join("");
}

// Write a function that takes a single string (word) as argument. The function must return an ordered
// list containing the indexes of all capital letters in the string.

const capitals = function (word) {
  const newArr = [];
  const arr = word.split("");
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i].toUpperCase()) {
      newArr.push(i);
    }
  }
  return newArr;
};
