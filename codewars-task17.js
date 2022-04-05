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
