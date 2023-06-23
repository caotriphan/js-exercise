// 1. Return the Next Number from the Integer Passed
const addition = (num) => num += 1;

// 2. get first value
const getFirstValue = [1, 2, 3];
const getFirstValue1 = [80, 5, 100];
const getFirstValue2 = [-500, 0, 50];

// convert minute to seconds
function convertMintoSec(minutes) {
  return minutes * 60;
}

// covert hour to second
function convertHourtoSec(hour) {
  return hour * 60 * 60;
}

// calc age in days
function calcAge(ageInYear) {
  const ageInDay = ageInYear * 365;
  return ageInDay;
};

//return sum of two number
const sumOf2Number = (num1, num2) => { return num1 + num2 };

// Area of a Triangle
const triArea = (base, height) => { return (base * height) / 2 };

//buggy code
const cubesANumber = (number1) => { return number1 * number1 * number1 };

// Power Calculator
const powerCalculator = (voltage, current) => { return voltage * current };

//Maximum Edge of a Triangle
const maximumEdgeOfTriangle = (side1, side2) => `The Maximum range of a triangle's third edge is ${Math.floor((side1 + side2) - 1)}`;

// Return the Remainder from Two Numbers
const remainder = (num1, num2) => { return num1 % num2 };

// Find the Perimeter of a Rectangle
const findPerimeter = (width, height) => { return (width + height) * 2 };

// Return Something to Me!
const giveMeSomething = (a) => { return `Something ${a}` };

// Correct the mistakes
const squaredNumber = (nu) => { return nu * nu };

// Is the Number Less than or Equal to Zero?
const lessThanOrEqualToZero = (number12) => { return number12 <= 0 ? true : false };

// Sum of Polygon Angles
const sumPolygon = (number) => { return number > 2 ? (number - 2) * 180 : undefined };

// Basketball Points
const basketballPoints = (point1, point2) => { return ((point1 * 2) + (point2 * 3)) };

// Basic Variable Assignment
const basicVariableAssignment = (name) => { return `${name}edabit.` };

// less than 100
const lessThan100 = (number5, number6) => { return (number5 + number6) < 100 ? true : false };

/**
 *
 * @param {*} num1
 * @param {*} num2
 * @returns
 */
const num2Bin = num => (num).toString(2).padStart(8, '0');

// Bitwise Operations
function bitwAND(num1, num2) {
  const num1tobin = num2Bin(num1);
  const num2tobin = num2Bin(num2);
  let finalBitAND = '';
  for (let i = 0; i < num1tobin.length; i++) {
    ((num1tobin[i] == '1') && (num2tobin[i] == '1')) ? finalBitAND += '1' : finalBitAND += '0';
  }
  return parseInt(finalBitAND, 2)
};


function bitwOR(num1, num2) {
  const num1tobin = num2Bin(num1);
  const num2tobin = num2Bin(num2);
  let finalBitAND = '';
  for (let i = 0; i < num1tobin.length; i++) {
    ((num1tobin[i] == '1') || (num2tobin[i] == '1')) ? finalBitAND += '1' : finalBitAND += '0';
  }
  return parseInt(finalBitAND, 2)
};

/**
 * Create a function that takes a number as an argument. Add up all the numbers from 1 to the number you passed to the function.
 * For example, if the input is 4 then your function should return 10 because 1 + 2 + 3 + 4 = 10.
 * @param {*} num
 * @returns
 */
function addUp(num) {
  let sum = 0;
  for (let i = 1; i <= num; i++) {
    sum += i;
  }
  return sum;
}

/**
 * Create a function that takes a number (step) as an argument and returns the number of matchsticks in that step
 * https://edabit.com/challenge/tYHkTdFrEmWfxpPKF
 * @param {*} step
 * @returns
 */
const matchStick = (step) => (step * 6) - (step - 1);

/**
 * Write a function that mimics (without the use of <<) the left shift operator and returns the result from the two given integers.
 * https://edabit.com/challenge/pB6CF3rFBi8ykJ3Br
 * @param {*} num1
 * @param {*} num2
 * @returns
 */
const shiftToLeft = (num1, num2) => num1 * Math.pow(2, num2);

/**
 * get weekday from given number day
 * @param {number} num the weekday in number
 * @returns weekday in string
 */
const getWeekDay = num => {
  switch (num) {
    case 0: return 'Sunday';
    case 1: return 'Monday';
    case 2: return 'Tuesday';
    case 3: return 'Wednesday';
    case 4: return 'Thurday';
    case 5: return 'Friday';
    case 6: return 'Saturday';
  }
};
// console.log(`Today is ${getWeekDay}`);

/**
 * get AM or PM based on given date time
 * @param {number} hour the hour
 * @returns AM or PM
 */
const getAmPm = (hour) => hour >= 12 ? 'PM' : 'AM';

/**
 * return hour in 12h format
 * @param {number} hour the number of hour
 * @returns hour in 12h format
 */
const getHour12 = hour => hour > 12 ? hour - 12 : hour;

const get2DigitTime = n => n < 10 ? n.toString().padStart(2, '0') : n.toString()
/**
 * Write a JavaScript program to display the current day and time in the following format.
* Sample Output : Today is : Tuesday.
* Current time is : 10 PM : 30 : 38
 * @param {Date} date
 */
const printDate = (date) => {
  const weekday = getWeekDay(date.getDay()); // 0 -> Sunday, 1 = Monday, ...
  const hour = date.getHours();

  return `Today is : ${weekday}.
  Current time is : ${get2DigitTime(getHour12(hour))} ${getAmPm(hour)} : ${get2DigitTime(date.getMinutes())} : ${get2DigitTime(date.getSeconds())}`;
}

// const hour = printDay.getHours();
// const minute = printDay.getMinutes();
// const second = printDay.getSeconds();
// const noonOrNot = (hour >= 12) ? 'PM' : 'AM';
//     hour = (hour >= 12) ? hour - 12 : hour;

// printDate(new Date()); //? print current date

/**
 *  Write a JavaScript program to print the current window contents.
 */
const printCurrentWindowContents = () => window.print();

/**
 * Write a JavaScript program to get the current date.
*/
const printDay = (today) => {
  // const  = ;
  const dd = today.getDate();
  const mm = today.getMonth() + 1;
  const yyyy = today.getFullYear(); //?
  // dd //?

  // console.log(`Today is: ${ mm } -${ dd } -${ yyyy } `);
  // console.log(`Today is: ${ mm } /${dd}/${ yyyy } `);
  // console.log(`Today is: ${ dd } -${ mm } -${ yyyy } `);
  // console.log(`Today is: ${ dd } /${mm}/${ yyyy }`);


}

// printDay(new Date());
// printDay(new Date(1996, 11, 22));

/**
 * Write a JavaScript program to find the area of a triangle where three sides are 5, 6, 7.
 */
//?
const areaTriangle = (num1, num2, num3) => {
  const p = (num1 + num2 + num3) / 2;
  return Math.sqrt(p * (p - num1) * (p - num2) * (p - num3));
}

/**
 * Write a JavaScript program to find out if 1st January will be a Sunday between 2014 and 2050.
 */
function findYearJan01(year) {
  while (year <= 2050) {
    if (new Date(year, 0, 1).getDay() === 0) {
      return year;
    }
    year++;
  }
  return 0;
}
// console.log(findYearJan01())

/**
 * Write a JavaScript program where the program takes a random integer between 1 and 10, and the user is then prompted to input a guess number.
 * The program displays a message "Good Work" if the input matches the guess number otherwise "Not matched".
 */
function comparedNum(guessNumber) {
  const randomNum = Math.floor(Math.random() * 10);
  return guessNumber === randomNum ? 'Good Work' : 'Not Matched';
}
// console.log(comparedNum(4))
//comparedNum(Number(prompt('enter a number from 1 to 10')))

/**
 * Write a JavaScript program to calculate the days left before Christmas
 */
function daysLeftToXmas(today) {
  const xmasDay = new Date(today.getFullYear(), 11, 25);
  xmasDay.setFullYear(today.getFullYear());
  if (today > xmasDay) {
    xmasDay.setFullYear(today.getFullYear() + 1);
  }
  return Math.floor((xmasDay - today) / (1000 * 60 * 60 * 24));
}
const left = daysLeftToXmas(new Date(2023, 11, 30));
left

/**
 * Write a JavaScript program to calculate multiplication and division of two numbers (input from the user).
 */
const multi = (n1, n2) => n1 * n2;
// const result1 = multi(10, 12);
// result1

const divis = (n3, n4) => n3 / n4;
// const result2 = divis(12, 10)
// result2

/**
 * Write a JavaScript program to convert temperatures to and from Celsius, Fahrenheit.
[ Formula : c/5 = (f-32)/9 [ where c = temperature in Celsius and f = temperature in Fahrenheit ]
Expected Output :
60°C is 140 °F
45°F is 7.222222222222222°C
 */
const convertFToC = (f) => c = (((f - 32) * 5) / 9).toFixed(2);
// const r1 = convertFToC(80);
// r1
const convertCToF = (celcius) => fahrenheit = (((celcius * 9) / 5) + 32);
// const r2 = convertCToF(28);
// r2

/**
 *  Write a JavaScript program to get the difference between a given number and 13,
 * if the number is broader than 13 return double the absolute difference.
 */
const givenNum = (number2) => number2 > 13 ? (number2 - 13) * 2 : (13 - number2);
// const q = givenNum(34);
// q

/**
 * Write a JavaScript program to compute the sum of the two given integers.
 * If the two values are the same, then return triple their sum.
 */
const sumOfTwoIntegers = (n5, n6) => n5 === n6 ? (n5 + n6) * 3 : (n5 + n6);
// const w = sumOfTwoIntegers(7, 7)


/**
 * Write a JavaScript program to compute the absolute difference between a specified number and 19.
 * Returns triple the absolute difference if the specified number is greater than 19.
 */
const diffNumerAnd19 = (n7) => n7 > 19 ? (n7 - 19) * 3 : 19 - n7;
// const t = diffNumerAnd19(2)
// t

/**
 *  Write a JavaScript program to check a pair of numbers and return true if one of the numbers is 50 or if their sum is 50.
 */
const checkNumber = (n8, n9) => ((n8 + n9 === 50) || n8 === 50 || n9 === 50) ? true : '';
// const p = checkNumber(30, 20)
// p

/**
 *  Write a JavaScript program to check whether a given integer is within 20 of 100 or 400.
 */
const checkIntegerWithin20Of100Or400 = (n10) => Math.abs(100 - n10) <= 20 || Math.abs(400 - n10) <= 20 ? true : false;
// const l = checkIntegerWithin20Of100Or400(20);
// l

/**
 * Write a JavaScript program to check two given integers whether one is positive and another one is negative.
 */
const checkPosOrNeg = (n11, n12) => (n11 < 0 && n12 > 0) || (n11 > 0 && n12 < 0) ? true : false;

/**
 * Write a JavaScript program to create another string by adding "Py" in front of a given string.
 * If the given string begins with "Py" return the original string.
 */
const createString = (originalString) => originalString.substring(0, 2) === 'Py' ? originalString : `Py${originalString}`;

// const m = createString('cachu');
// m

/**
 *  Write a JavaScript program to remove a character at the specified position in a given string and return the modified string.
 */
const removeCharacterOfString = (givenString, removePosition) => newString = givenString.split('').splice(removePosition).join('');


/**
 * Write a JavaScript program to create a new string from a given string by changing the position of the first and last characters.
 * The string length must be broader than or equal to 1.
 */
function changeFirstLastCharacter(givenstring) {
  if (givenstring.length <= 1) {
    return givenstring;
  }
  stringLeft = givenstring.substring(1, givenstring.length - 1);
  return (givenstring[givenstring.length - 1]) + stringLeft + givenstring[0];
}

/**
 * Write a JavaScript program to create another string from a given string with the first character of the given string added to the front and back
 */
function addFirstCharacterFronAndBack(givenstring) {
  newstring = givenstring.substring(0, 1);
  return (newstring + givenstring + newstring);
}

/**
 * Write a JavaScript program to check whether a given positive number is a multiple of 3 or 7
 */
const checkNumber21 = (num1, num2) => (num1 > 0 && num2 > 0) && (num1 * num2 == 21);

/**
 * Write a JavaScript program to create a string from a given string.
 * This is done by taking the last 3 characters and adding them at both the front and back.
 * The string length must be 3 or more.
 */
function last3CharacterAddingFrontAndBack(givenString) {
  if (givenString.length >= 3) {
    stringLeft = givenString.substring(givenString.length - 3, givenString.length);
    return (stringLeft + givenString + stringLeft);
  } else {
    return false;
  }
}

/**
 * Write a JavaScript program to check whether a string starts with 'Java' if it does not otherwise.
 */
const giveStringJava = (givenstring) => givenstring.substring(0, 4) == 'Java';

/**
 * Write a JavaScript program to check whether two given integer values are in the range 50..99 (inclusive).
 * Return true if either of them falls within the range.
 */
const checkingNumber = (number1, number2) => ((number1 >= 50 && number1 < +99) && (number2 >= 50 && number2 <= 99));

/**
 * Write a JavaScript program to check whether three given integer values are in the range 50..99 (inclusive).
 * Return true if one or more of them are in the specified range.
 */
const checking3Number = (number1, number2, number3) => ((number1 >= 50 && number1 < +99) || (number2 >= 50 && number2 <= 99) || (number3 >= 50 && number3 <= 99));

/**
 * Write a JavaScript program to check whether a string "Script" appears at the 5th (index 4) position in a given string.
 * If "Script" appears in the string, return the string without "Script" otherwise return the original one.
 */

function checkStringHasScript(givenString) {
  if (!givenString) {
    return givenString;
  }

  const newString = givenString.substring(4, 10);
  if (newString !== 'Script') {
    return givenString;
  }

  // jsvaScript123Script
  let arr = givenString.split('');
  arr.splice(4, 6); // => [s,c,r,i,p,t]
  return arr.join(''); // => 'jsva123Script'
}

/**
 *
 */
function max3Numbers(n1, n2, n3) {
  let arr = [n1, n2, n3];
  let max = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (max < arr[i]) {
      max = arr[i];
    }
  }
  return max;
}

/**
 * Write a JavaScript program to find the closest value to 100 from two numerical values.
 */
function closestValueto100(num1, num2) {
  const val1 = Math.abs(100 - num1);
  const val2 = Math.abs(100 - num2);
  return val1 <= val2 ? num1 : num2;
}

/**
 * Write a JavaScript program to check whether two numbers are in the range 40..60 or 70..100 inclusive.
 */
const checkGivenNumber = (num1, num2) =>
  ((num1 >= 40 && num1 <= 60) || (num1 >= 70 && num1 <= 100))
  &&
  ((num2 >= 40 && num2 <= 60) || (num2 >= 70 && num2 <= 100));

/**
 * Write a JavaScript program to find the largest number from the two given positive integers.
 * The two numbers are in the range 40..60 inclusive.
 */
const largestNumber = (num1, num2) =>
  (num1 >= 40 && num1 <= 60) && (num2 >= 40 && num2 <= 60)
    ?
    num1 > num2 ? num1 : num2
    :
    'cannot find the largest one.'

/**
 * Write a program to check whether a specified character exists between the 2nd and 4th positions in a given string.
 * @param {*} givenString
 * @param {*} character
 * @returns
 */
const checkGivenString = (givenString, character) => {
  const sub = givenString.substring(1, 3);
  return sub.includes(character);
}

/**
 * Write a JavaScript program that checks whether the last digit of three positive integers is the same.
 * @param {*} num1
 * @param {*} num2
 * @param {*} num3
 * @returns
 */
function give3Integer(num1, num2, num3) {
  const strnum1 = (num1).toString().at(-1);
  const strnum2 = (num2).toString().at(-1);
  const strnum3 = (num3).toString().at(-1);
  return strnum1 == strnum2 && strnum1 == strnum3;
}

/**
 *  Write a JavaScript program to produce a new string that has the first 3 characters in lower case from a given string.
 * If the string length is less than 3 convert all the characters to upper case.
 * @param {*} givenstring
 * @returns
 */
function upperToLowerCase(givenstring) {
  if (givenstring.length < 3) {
    return givenstring.toUpperCase();
  }
  return givenstring.substring(0, 3).toLowerCase();
}

function reverseCase(givenString) {
  const newarr = givenString.split('');
  let result = '';
  for (let i = 0; i < newarr.length; i++) {
    if (newarr[i] === newarr[i].toUpperCase()) {
      result += newarr[i].toLowerCase();
    } else {
      result += newarr[i].toUpperCase();
    }
  }

  return result;
}

/**
 * 39. Write a JavaScript program to compute the sum of the two given integers.
 * If the sum is in the range 50..80 return 65 otherwise return 80.
 * @param {*} num1
 * @param {*} num2
 * @returns
 */
const sum2num = (num1, num2) => {
  const sum = num1 + num2;
  return sum >= 50 && sum <= 80 ? 65 : 80;
}

/**
 * 40. Write a JavaScript program to check from two given integers whether one of them is 8 or their sum or difference is 8.
 * @param {*} num1
 * @param {*} num2
 * @returns
 */
const check2num = (num1, num2) =>
  (num1 == 8 || num2 == 8)
    ||
    num1 + num2 == 8
    ||
    Math.abs(num1 - num2) == 8
    ? true : false;

/**
 * 41. Write a JavaScript program to check a set of three numbers;
 * if the three numbers are the same return 30; otherwise return 20; and if two numbers are the same return 40.
 * @param {*} num1
 * @param {*} num2
 * @param {*} num3
 * @returns
 */
function check3num(num1, num2, num3) {
  if (num1 == num2 && num2 == num3) {
    return 30
  }

  if (num1 == num2 || num1 == num3 || num2 == num3) {
    return 40;
  };

  return 20
}

/**
 * 43. Write a JavaScript program to check from three given numbers (non negative integers) that two or all of them have the same rightmost digit.
 * @param {*} num1
 * @param {*} num2
 * @param {*} num3
 * @returns
 */
function check3IntegerHaveSameRightmostDigit(num1, num2, num3) {
  const RimoDi1 = (num1).toString().at(-1);
  const RimoDi2 = (num2).toString().at(-1);
  const RimoDi3 = (num3).toString().at(-1);
  return (RimoDi1 == RimoDi2 && RimoDi1 == RimoDi3) || (RimoDi1 == RimoDi2 || RimoDi1 == RimoDi3 || RimoDi2 == RimoDi3);
}

/**
 * 44. Write a JavaScript program to check from three given integers whether a number is greater than or equal to 20.
 * It is less than the others.
 * @param {*} num1
 * @param {*} num2
 * @param {*} num3
 * @returns
 */
function check3IntegerNumber(num1, num2, num3) {
  return (num1 >= 20 && (num1 < num2 || num1 < num3)) ||
    (num2 >= 20 && (num2 < num1 || num2 < num3)) ||
    (num3 >= 20 && (num3 < num2 || num3 < num1));
}

/**
 * 45. Write a JavaScript program that checks two integer values and returns true if either one is 15 or if their sum or difference is 15.
 * @param {*} num1
 * @param {*} num2
 * @returns
 */
const check2IntegerNumber = (num1, num2) => num1 == 15 || num2 == 15 || num1 + num2 == 15 || Math.abs(num1 - num2) == 15;

/**
 * 46. Write a JavaScript program to check two given non-negative integers if one (not both) is a multiple of 7 or 11
 * @param {*} num1
 * @param {*} num2
 * @returns
 */
function check2PositiveIntegerNumber(num1, num2) {
  if (num1 < 0 || num2 < 0) {
    return 0;
  }

  return num1 % 7 == 0 || num1 % 11 == 0 || num2 % 7 == 0 || num2 % 11 == 0 ? true : false;
}
/**
 * 48. Write a JavaScript program to reverse a given string.
 * @param {*} givenString
 * @returns
 */
function reverseString(givenString) {
  const arr = givenString.split('');
  return arr.reverse().join('');
}

/**
 * 50. Write a JavaScript program to capitalize the first letter of each word in a given string.
 * @param {*} newString
 * @returns
 */
function capitalizeFirstLetter(newString) {
  const arr = newString.split(' ');
  let result = '';
  for (let i = 0; i < arr.length; i++) {
    result += arr[i][0].toUpperCase() + arr[i].substr(1) + ' ';
  }
  return result.trim();
}

// offer to use if more than one space appear in the string
function capitalizeFirstLetter(newString) {
  let result = newString[0].toUpperCase();
  for (let i = 1; i < newString.length; i++) {
    if (newString[i] !== ' ' && newString[i - 1] === ' ') {
      result += newString[i].toUpperCase();
    } else {
      result += newString[i];
    }
  }

  return result;
}

/**
 * 52. Write a JavaScript program to convert letters of a given string alphabetically.
 * @param {*} newString
 * @returns
 */
function sortStringAlphabet(newString) {
  const arr = newString.split('');
  return arr.sort().join('');
}

/**
 * 53. Write a JavaScript program to check whether the characters a and b are separated by exactly 3 places anywhere (at least once) in a given string.
 * @param {*} newstring
 * @returns
 */
const checkString = (newstring) => (/a...b/).test(newstring) || (/b...a/).test(newstring);

/**
 * 54. Write a JavaScript program to count the number of vowels in a given string.
 * @param {*} newstring
 * @returns
 */
const countVowel = (newstring) => newstring.match(/[euoai]/gi).length;

/**
 * 56. Write a JavaScript program to divide two positive numbers and return the result as string with properly formatted commas.
 * @param {*} num1
 * @param {*} num2
 * @returns
 */
function givenInteNum(num1, num2) {
  let div = (num1 / num2).toFixed(2);
  return div.toString('');
}

/**
 * 57. Write a JavaScript program to create one string of specified copies (positive numbers) of a given string.
 * @param {*} givenString
 * @param {*} number
 * @returns
 */
function copyString(givenString, number) {
  if (number <= 0) {
    return givenstring
  }

  return givenString.repeat(number);
}

/**
58. Write a JavaScript program to create an updated string of 4 copies of the last 3 characters of a given original string.
The string length must be 3 and above.
 *
 * @param {*} originalString
 * @returns
 */
function copy3LastGivenString(originalString) {
  if (!originalString || originalString.length < 3) {
    return originalString;
  }
  const newString = originalString.substring(originalString.length - 3);
  return newString.repeat(4);
}

/**
 * Write a JavaScript program to extract the first half of a even string.
 * @param {*} givenString
 * @returns
 */
function extract1HaftString(givenString) {
  if (!givenString || givenString.length % 2 !== 0) {
    return '';
  }

  return givenString.substring(0, givenString.length / 2)
}

/**
 * 60. Write a JavaScript program to create a new string without the first and last characters of a given string.
 * @param {*} givenString
 * @returns
 */
const createNewString = (givenString) => givenString.substring(1, givenString.length - 1);

/**
 * 61. Write a JavaScript program to concatenate two strings except for their first character.
 * @param {*} string1
 * @param {*} string2
 * @returns
 */
function concatenate2String(string1, string2) {
  return string1.substring(1) + string2.substring(1);
}

/**
 * 62. Write a JavaScript program to move the last three characters to the start of a given string.
 * The string length must be greater than or equal to three.
 * @param {*} givenString
 * @returns
 */
function move3LastCharater(givenString) {

  if (!givenString || givenString.length < 3) {
    return '';
  }

  return givenString.substring(givenString.length - 3) + givenString.substring(0, givenString.length - 3);
}

/**
 * 63. Write a JavaScript program to create a string using the middle three characters of a given string of odd length.
 * The string length must be greater than or equal to three.
 * @param {*} givenString
 * @returns
 */
function getMiddleStringOddLength(givenString) {
  if (!givenString || givenString.length % 2 == 0) {
    return '';
  }

  const midCharater = (givenString.length + 1) / 2;
  return givenString.substr(midCharater - 2, 3);
}

/**
64. Write a JavaScript program to concatenate two strings and return the result.
If the length of the strings does not match, then remove the characters from the longer string.
 *
 * @param {*} string1
 * @param {*} string2
 * @returns
 */
function concatenate2StringHasSameLength(string1, string2) {
  if (!string1 || !string2) {
    return '';
  }

  if (string1.length == string2.length) {
    return string1 + string2;
  }

  const newstr = Math.abs(string1.length - string2.length)
  if (string1.length > string2.length) {
    return string1.substring(newstr) + string2;
  } else {
    return string1 + string2.substring(newstr)
  }
}

/**
 * 65. Write a JavaScript program to test whether a string ends with "Script".
 * The string length must be greater than or equal to 6.
 * @param {*} givenString
 * @returns
 */
function checkStringEndWithScript(givenString) {
  if (!givenString || givenString.length < 6) {
    return '';
  }

  return givenString.substring(givenString.length - 6) === 'script';
}

/**
 * 66. Write a JavaScript program to display the city name if the string begins with "Los" or "New" otherwise return blank.
 * @param {*} cityName
 * @returns
 */
function displayCityName(cityName) {
  if (!cityName) {
    return '';
  }

  if (cityName.substr(0, 3) === 'Los' || cityName.substr(0, 3) === 'New') {
    return cityName;
  }
  return '';
}

/**
 * 67. Write a JavaScript program to create a new string from a given string.
 * This program removes the first and last characters of the string if the first or last character is 'P'.
 * Return the original string if the condition is not satisfied.
 * @param {*} givenString
 * @returns
 */
function removeFirstLastCharacter(givenString) {
  if (!givenString) {
    return '';
  }

  if (givenString[0] === 'p' || givenString[0] === 'P' || givenString[givenString.length - 1] === 'p' || givenString[givenString.length - 1] === 'P') {
    return givenString.substring(1, givenString.length - 1);
  }

  return givenString;
}

/**
 * 68. Write a JavaScript program to create a new string using the first and last n characters from a given string.
 * The string length must be larger than or equal to n.
 * @param {*} givenString
 * @param {*} n
 * @returns
 */
function createFirstLastNCharacter(givenString, n) {
  if (!givenString || n <= 0 || givenString.length < n) {
    return '';
  }

  const firstStr = givenString.substr(0, n);
  const lastStr = givenString.substr(givenString.length - n, n);
  return firstStr + lastStr;
}

/**
 * 69. Write a JavaScript program to compute the sum of three elements of a given array of integers of length 3.
 * @param {*} param0
 * @returns
 */
function sum3ElementArray([num1, num2, num3]) {
  return sum = num1 + num2 + num3;
}

/**
 * 70. Write a JavaScript program to rotate the elements left in a given array of integers of length 3.
 * @param {*} array
 * @returns
 */
function rotateElementLeft(array) {
  return [array[1], array[2], array[0]];
}

/**
 * 71. Write a JavaScript program to check whether 1 appears in the first or last position of a given array of integers.
 * The array length must be larger than or equal to 1.
 * @param {*} array
 * @returns
 */
function check1AppearInArray(array) {
  if (array.length < 1 || !array) {
    return 0;
  }

  return array[0] === 1 || array[array.length - 1] === 1;
}

/**
 * 73. Write a JavaScript program to reverse the elements of a given array of integers of length 3.
 * @param {*} array
 * @returns
 */
const reverseArray = (array) => array.reverse();

/**
 * 75. Write a JavaScript program to create an array taking the middle elements of the two arrays of integer and each length 3.
 * @param {*} array
 * @returns
 */
function findTheLargestElement(array) {
  if (!array) {
    return '';
  }

  const largestNumber = Math.max(array[0], array.at(-1));

  return array.fill(largestNumber);
}

/**
 * 76. Write a JavaScript program to create an array by taking the first and last elements from a given array of integers.
 * The length must be larger than or equal to 1.
 * @param {*} array
 * @returns
 */
function createNewArray(array) {
  if (!array || array.length < 1) {
    return [];
  }

  return [array[0], array.at(-1)];
}

/**
 * 77. Write a JavaScript program to test whether an array of integers of length 2 contains 1 or 3.
 * @param {*} array
 * @returns
 */
function testArrayHas13(array) {
  if (!array) {
    return [];
  }

  return array.indexOf(1) !== -1 || array.indexOf(3) !== -1;
}

/**
 * 78. Write a JavaScript program to test whether an array of integers of length 2 does not contain 1 or 3.
 * @param {*} array
 * @returns
 */
function testArrayNothave12(array) {
  if (!array) {
    return [];
  }

  return array.indexOf(1) === -1 || array.indexOf(3) === -1;
}

/**
 * 79. Write a JavaScript program to test whether a given array of integers contains 30 and 40 twice.
 * The array length should be 0, 1, or 2.
 * @param {*} array
 * @returns
 */
function checkForArrayContain30Or40Twice(array) {
  if (!array || array.length <= 1) {
    return false;
  }

  let count30 = 0;
  let count40 = 0;

  for (let i = 0; i < array.length; i++) {
    if (array[i] == 30) {
      count30++;
    } else if (array[i] == 40) {
      count40++;
    }
  }

  return count30 == 2 || count40 == 2;
}

function wrapFirstLastInteger(array) {
  if (!array || array.length < 1) {
    return [];
  }


}












module.exports = {
  addition,
  convertMintoSec,
  convertHourtoSec,
  calcAge,
  sumOf2Number,
  triArea,
  cubesANumber,
  powerCalculator,
  maximumEdgeOfTriangle,
  remainder,
  findPerimeter,
  giveMeSomething,
  squaredNumber,
  lessThanOrEqualToZero,
  sumPolygon,
  basketballPoints,
  basicVariableAssignment,
  bitwAND,
  bitwOR,
  addUp,
  matchStick,
  shiftToLeft,
  printDate,
  areaTriangle,
  findYearJan01,
  convertFToC,
  convertCToF,
  givenNum,
  sumOfTwoIntegers,
  diffNumerAnd19,
  checkNumber,
  changeFirstLastCharacter,
  addFirstCharacterFronAndBack,
  last3CharacterAddingFrontAndBack,
  giveStringJava,
  checkingNumber,
  checkStringHasScript,
  max3Numbers,
  closestValueto100,
  checkGivenNumber,
  largestNumber,
  checkGivenString,
  give3Integer,
  upperToLowerCase,
  reverseCase,
  createNewArray,
  findTheLargestElement,
  createFirstLastNCharacter,
  removeFirstLastCharacter,
  concatenate2StringHasSameLength,
  getMiddleStringOddLength,
  move3LastCharater,
  checkForArrayContain30Or40Twice,


}
