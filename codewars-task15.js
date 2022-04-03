// ""           -->   ""
// "CodeWars"   -->   "cODEwARS"
// "abc"        -->   "ABC"
// "ABC"        -->   "abc"
// "123235"     -->   "123235"

function swapCase(str) {
  return str
    .split("")
    .map((e) => (e === e.toUpperCase() ? e.toLowerCase() : e.toUpperCase()))
    .join("");
}
