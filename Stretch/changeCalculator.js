const calculateChange = function (total, cash) {
  let change = cash - total;
  let changeFinal = {};
  const coinTypes = ["twenty", "ten", "five", "two", "dollar", "quarter", "dime", "nickel", "penny"];
  const coinValues = [2000, 1000, 500, 200, 100, 25, 10, 5, 1]
  let changeAmount = "";
  for (let i = 0; i < coinValues.length; i++) {
    changeAmount = Math.floor(change / coinValues[i]);
    if (changeAmount > 0) {
      changeFinal[coinTypes[i]] = changeAmount;
      change -= changeAmount*coinValues[i];
    }
  }
  return changeFinal;
};


console.log(calculateChange(1787, 2000));
console.log(calculateChange(2623, 4000));
console.log(calculateChange(501, 1000));