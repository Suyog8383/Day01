let str = "nagawade";
function stringReverse(str) {
  let result = str.split("").reverse().join("");
  return result;
}
console.log("@SN string reverse", stringReverse(str));

let str1 = [1, 2, 3, 4, 5];
function arrayReverse(str) {
  let result = str.reverse();
  return result;
}
console.log("@SN array reverse", arrayReverse(str1));
