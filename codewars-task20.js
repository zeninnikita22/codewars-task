// Is every value in the array an array?

// This should only test the second array dimension of the array.
// The values of the nested arrays don't have to be arrays.

// Examples:

// [[1],[2]] => true
// ['1','2'] => false
// [{1:1},{2:2}] => false

function checkIfArray(arr) {
  let checkingArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      checkingArray.push(1);
    } else {
      checkingArray.push(2);
    }
  }
  if (checkingArray.includes(2)) {
    return false;
  } else {
    return true;
  }
}
