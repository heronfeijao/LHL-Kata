const urlEncode = function (text) {
  let newText = "";
  for (let i = 0; i < text.length; i++) {
    if ((i === 0 && text[i] === " ") || (i === text.length - 1 && text[i] === " ")) {
      newText[i] += "";
    } else if (text[i] === " ") {
      newText += "%20";
    } else {
      newText += text[i];
    }
  }
  return newText;
};

console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));