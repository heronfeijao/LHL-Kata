const blocksAway = function (directions) {
  let finalPosition = {
    east: 0,
    north: 0
  }

  let RL = [0, 0];

  if (directions[0] === 'left') {
    RL = [1, 0]
  } else {
    RL = [0, 1]
  }

  for (let i = 0; i < directions.length; i += 2) {
    if (directions[i] === "right") {
      if (Math.abs(RL[0] % 4) === 0) {
        finalPosition.east += directions[i + 1];
      } else if ((RL[0] % 4 === 1) || (RL[0] % 4 === -3)) {
        finalPosition.north -= directions[i + 1];
      } else if (Math.abs(RL[0] % 4) === 2) {
        finalPosition.east -= directions[i + 1];
      } else if ((RL[0] % 4 === 3) || (RL[0] % 4 === -1)) {
        finalPosition.north += directions[i + 1];
      }
      RL[0]++;
      RL[1]--
    }

    if (directions[i] === "left") {
      if (Math.abs(RL[1] % 4) === 0) {
        finalPosition.north += directions[i + 1];
      } else if ((RL[1] % 4 === 1) || (RL[0] % 4 === -3)) {
        finalPosition.east -= directions[i + 1];
      } else if (Math.abs(RL[1] % 4) === 2) {
        finalPosition.north -= directions[i + 1];
      } else if ((RL[1] % 4 === 3) || (RL[1] % 4 === -1)) {
        finalPosition.east += directions[i + 1];
      }
      RL[1]++;
      RL[0]--
    }
  }

  return finalPosition
};

console.log(blocksAway(["right", 2, "left", 3, "left", 1]));
console.log(blocksAway(["left", 1, "right", 1, "left", 1, "right", 1, "left", 1, "right", 1]));
console.log(blocksAway(["left", 3, "right", 1, "right", 3, "right", 1]));
console.log(blocksAway(["right", 3, "left", 1, "left", 2, "right", 1, "right", 3, "left", 1, "right", 1, "right", 2, "right", 1, "left", 1, "left", 2, "left", 1]));