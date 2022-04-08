// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.

let testStr = "my pyx";

function getCount(str) {
  let myRegex = /[aeiou]/gi;
  if (str.match(myRegex) === null) {
    return 0;
  }
  return str.match(myRegex).join("").length;
}

console.log(getCount(testStr));
