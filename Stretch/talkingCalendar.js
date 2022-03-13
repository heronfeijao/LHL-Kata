const talkingCalendar = function (date) {
  let varDate = "";
  let varYear = date.slice(0, 4);
  let varMonth = date.slice(5, 7);
  let varDay = date.slice(8, 10);
  switch (varMonth) {
    case '01':
      varDate += 'January ';
      break;
    case '02':
      varDate += 'February ';
      break;
    case '03':
      varDate += 'March ';
      break;
    case '04':
      varDate += 'April ';
      break;
    case '05':
      varDate += 'May ';
      break;
    case '06':
      varDate += 'June ';
      break;
    case '07':
      varDate += 'July ';
      break;
    case '08':
      varDate += 'August ';
      break;
    case '09':
      varDate += 'September ';
      break;
    case '10':
      varDate += 'October ';
      break;
    case '11':
      varDate += 'November ';
      break;
    case '12':
      varDate += 'December ';
  }
  if (varDay[0] === '0') {
    varDate += varDay[1];
  } else {
    varDate += varDay;
  }
  if (varDay === '01' || varDay === '21' || varDay === '31') {
    varDate += "st, ";
  } else if (varDay === '02' || varDay === '22') {
    varDate += "nd, ";
  } else if (varDay === '03' || varDay === '23') {
    varDate += "rd, ";
  } else {
    varDate += "th, ";
  }
  varDate += varYear;
  return varDate;
};

console.log(talkingCalendar("2017/12/02"));
console.log(talkingCalendar("2007/11/11"));
console.log(talkingCalendar("1987/08/24"));
