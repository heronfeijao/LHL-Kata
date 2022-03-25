const urlDecode = function (text) {
  let textObj = {};
  text = text.replace(/%20/g, ' ');
  let newText = text.split('&');
  for (let i = 0 ; i < newText.length ; i++) {
    let sliceVar = newText[i].search('=');
    textObj[newText[i].slice(0,sliceVar)] = newText[i].slice(sliceVar+1,newText[i].length);
  }
  return textObj;
};

console.log(urlDecode("duck=rubber"));
console.log(urlDecode("bootcamp=Lighthouse%20Labs"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain").weather);