const sumLargestNumbers = function (data) {
  let firstLarge = "";
  let secondLarge = "";
  for (let i = 0; i < data.length; i++) {
    if (data[i] > firstLarge) {
      firstLarge = data[i];
    }
  }
  for (let i = 0; i < data.length; i++) {
    if (data[i] > secondLarge && data[i] < firstLarge) {
      secondLarge = data[i];
    }
  }
  return firstLarge + secondLarge;
};


console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));