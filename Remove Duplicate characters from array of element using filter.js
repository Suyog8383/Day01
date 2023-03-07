let arr = [1, 2, 2, 3, 4, 5, 5, 6, 6];
function removeDuplicate(arr) {
  let data = arr.filter((item, index) => arr.indexOf(item) === index);
  return data;
}

console.log("@SN ", removeDuplicate(arr));
