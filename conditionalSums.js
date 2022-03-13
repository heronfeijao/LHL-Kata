const conditionalSum = function (values, condition) {
  let sumEven = Number();
  let sumOdd = Number();
  for (let i = 0; i < values.length; i++) {
    if (values[i] % 2 === 0) {
      sumEven += values[i];
    } else {
      sumOdd += values[i];
    }
  }
  if (condition === "even") {
    return sumEven;
  } else {
    return sumOdd;
  }
};

console.log(conditionalSum([1, 2, 3, 4, 5], "even"));
console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));
console.log(conditionalSum([13, 88, 12, 44, 99], "even"));
console.log(conditionalSum([], "odd"));