// task - to write a function which finds a string "needle" among the elements of a given array
// and returns string "needle is found at the position X" where X is index of element in array
function findNeedle(haystack) {
  let i = 0;
  do {
    i = i + 1;
  } while (haystack[i] !== "needle");
  return "needle is found at the position " + i;
}

console.log(
  findNeedle([
    "hay",
    "junk",
    "hay",
    "hay",
    "moreJunk",
    "randomJunk",
    "needle",
    "junk",
    "hay",
  ])
);
