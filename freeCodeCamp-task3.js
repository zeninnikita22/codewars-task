// Repeat a given string str (first argument) for num times (second argument). Return an empty string
// if num is not a positive number. For the purpose of this challenge, do not use the built-in
// .repeat() method.

function repeatStringNumTimes(str, num) {
  let acc = "";
  for (let i = 0; i < num; i++) {
    acc = acc + str;
  }
  return str;
}

// Truncate a string (first argument) if it is longer than the given maximum string length
// (second argument). Return the truncated string with a ... ending.

function truncateString(str, num) {
  const newStr = str.slice(0, num);
  if (str.length <= num) {
    return newStr;
  }
  return newStr + "...";
}

// You are given two arrays and an index.
// Copy each element of the first array into the second array, in order.
// Begin inserting elements at index n of the second array.
// Return the resulting array. The input arrays should remain the same after the function runs.

function frankenSplice(arr1, arr2, n) {
  const newSecondArray = arr2.slice();
  newSecondArray.splice(n, 0, ...arr1.slice());
  return newSecondArray;
}

// Return the lowest index at which a value (second argument) should be inserted into an array
// (first argument) once it has been sorted. The returned value should be a number.

function getIndexToIns(arr, num) {
  arr.push(num);
  arr.sort((a, b) => a - b);
  return arr.findIndex((element) => element === num);
}
