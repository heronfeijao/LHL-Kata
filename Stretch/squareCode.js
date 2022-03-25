const squareCode = function (message) {
  const newMessage = message.replace(/ /g, "");
  let msgLength = newMessage.length;
  const square = Math.ceil(Math.sqrt(msgLength));
  let arrayedMsg = [];
  let codedMessage = "";
  let iW = 0;
  while (iW < msgLength) {
    arrayedMsg.push(newMessage.slice(iW, iW + square));
    iW += square;
  }

  for (let i = 0; i < square; i++) {
    for (let j = 0; j < arrayedMsg.length; j++) {
      if (arrayedMsg[j][i] !== undefined) {
        codedMessage += arrayedMsg[j][i];
      }
    }
    codedMessage += " "
  }
  return codedMessage;
};

console.log(squareCode("chill out"));
console.log(squareCode("feed the dog"));
console.log(squareCode("have a nice day"));
console.log(squareCode("if man was meant to stay on the ground god would have given us roots"));