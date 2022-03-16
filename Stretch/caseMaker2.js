const makeCase = function (input, caseVar) {
  let newString = "";

  //Camel Function
  const camelFunc = function (inputVar) {
    for (let i = 0; i < inputVar.length; i++) {
      if (i === 0) {
        newString += inputVar[i].toLowerCase();
      } else if (inputVar[i] === " ") {
        newString += "";
      } else if (inputVar[i - 1] === " ") {
        newString += inputVar[i].toUpperCase();
      } else {
        newString += inputVar[i];
      }
    }
  }

  //Pascal Function
  const pascalFunc = function (inputVar) {
    for (let i = 0; i < inputVar.length; i++) {
      if (i === 0) {
        newString += inputVar[i].toUpperCase();
      } else if (inputVar[i] === " ") {
        newString += "";
      } else if (inputVar[i - 1] === " ") {
        newString += inputVar[i].toUpperCase();
      } else {
        newString += inputVar[i];
      }
    }
  }

  //Snake Function
  const snakeFunc = function (inputVar) {
    for (let i = 0; i < inputVar.length; i++) {
      if (inputVar[i] === " ") {
        newString += "_";
      } else {
        newString += inputVar[i];
      }
    }
    return newString;
  }

  //Kebab Function
  const kebabFunc = function (inputVar) {
    for (let i = 0; i < inputVar.length; i++) {
      if (inputVar[i] === " ") {
        newString += "-";
      } else {
        newString += inputVar[i];
      }
    }
  }

  //Title Function
  const titleFunc = function (inputVar) {
    for (let i = 0; i < inputVar.length; i++) {
      if (i === 0) {
        newString += inputVar[i].toUpperCase();
      } else if (inputVar[i - 1] === " ") {
        newString += inputVar[i].toUpperCase();
      } else {
        newString += inputVar[i];
      }
    }
  }

  //Vowel Function
  const vowelFunc = function (inputVar) {
    newString = "";
    for (let i = 0; i < inputVar.length; i++) {
      if (inputVar[i] === 'a' || inputVar[i] === 'e' || inputVar[i] === 'i' || inputVar[i] === 'o' || inputVar[i] === 'u') {
        newString += inputVar[i].toUpperCase();
      } else {
        newString += inputVar[i];
      }
    }
  }

  //Consonant Function
  const consoFunc = function (inputVar) {
    newString = "";
    for (let i = 0; i < inputVar.length; i++) {
      if (inputVar[i].includes('a') || inputVar[i].includes('e') || inputVar[i].includes('i') || inputVar[i].includes('o') || inputVar[i].includes('u')) {
        newString += inputVar[i];
      } else {
        newString += inputVar[i].toUpperCase();
      }
    }
  }

  //Upper Function
  const upperFunc = function (inputVar) {
    newString = inputVar.toUpperCase();
  }

  //Lower Function
  const lowerFunc = function (inputVar) {
    newString = inputVar.toLowerCase();
  }

  if (Array.isArray(caseVar)) {
    //Priority 1
    if (caseVar.includes('camel')) {
      camelFunc(input);
    } else if (caseVar.includes('pascal')) {
      pascalFunc(input);
    } else if (caseVar.includes('snake')) {
      snakeFunc(input);
    } else if (caseVar.includes('kebab')) {
      kebabFunc(input);
    } else if (caseVar.includes('title')) {
      titleFunc(input);
    }

    //Priority 2
    if (caseVar.includes('vowel')) {
      vowelFunc(newString);
    } else if (caseVar.includes('consonant')) {
      consoFunc(newString);
    }

    //Priority 3
    if (caseVar.includes('upper')) {
      upperFunc(newString);
    } else if (caseVar.includes('lower')) {
      lowerFunc(newString);
    }
    return newString;
  }

  //If caseVar not array...
  if (!Array.isArray(caseVar)) {
    switch (caseVar) {
      case 'camel':
        camelFunc(input);
        break;
      case 'pascal':
        pascalFunc(input);
        break;
      case 'snake':
        snakeFunc(input);
        break;
      case 'kebab':
        kebabFunc(input);
        break;
      case 'title':
        titleFunc(input);
        break;
      case 'vowel':
        vowelFunc(input);
        break;
      case 'consonant':
        consoFunc(input);
        break;
      case 'upper':
        upperFunc(input);
        break;
      case 'lower':
        lowerFunc(input);
    }
    return newString;
  }
}


console.log(makeCase("this is a string - CAMEL", "camel"));
console.log(makeCase("this is a string - pasCAl", "pascal"));
console.log(makeCase("this is a string - snake", "snake"));
console.log(makeCase("this is a string - KeBAB", "kebab"));
console.log(makeCase("this is a string - TitlE", "title"));
console.log(makeCase("this is a string - VoWeL", "vowel"));
console.log(makeCase("this is a string - cOnsOnAnt", "consonant"));
console.log(makeCase("this is a string - UPper & Snake", ["upper", "snake"]));
console.log(makeCase("THIS is A StrING - LOWer & Kebab", ["lower", "kebab"]));
console.log(makeCase("this is a string - VoWeL & SNAke", ["vowel", "snake"]));
console.log(makeCase("this is a string - CONSONAnt & SnaKE", ["consonant", "snake"]));