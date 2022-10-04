function arrayToString(array) {
  return array.join(", ");
}

function stringToArray(string) {
  return string.split(", ");
}

let autoProd = ["MERCEDES", "BMW", "AUDI", "FORD", "PORSCHE"];
console.log(arrayToString(autoProd));
console.log(stringToArray(arrayToString(autoProd)));
