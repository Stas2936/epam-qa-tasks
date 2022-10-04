function arrayNumber(arr, n) {
  let arrFind = arr.findIndex((item) => item === n);
  return arrFind;
}
console.log(arrayNumber([1, 2, 3, 4, 5], 3));
