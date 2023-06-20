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

powerCalculator(4, 6) //24

//Maximum Edge of a Triangle
const maximumEdgeOfTriangle = (side1, side2) => `The Maximum range of a triangle's third edge is ${Math.floor((side1 + side2) - 1)}`;

// Return the Remainder from Two Numbers
const remainder = (num1, num2) => { return num1 % num2 };

// Find the Perimeter of a Rectangle
const findPerimeter = (width, height) => { return (width + height) * 2 };

// Return Something to Me!
const giveMeSomething = (a) => { return `Something ${a}` };

// Correct the mistakes
const squaredNumber = (number) => { return number * number };

// Is the Number Less than or Equal to Zero?
const lessThanOrEqualToZero = (number) => { return number <= 0 ? true : false };

// Sum of Polygon Angles
const sumPolygon = (number) => { return number > 2 ? (number - 2) * 180 : undefined };

// Basketball Points
const points = (point1, point2) => { return ((point1 * 2) + (point2 * 3)) };

points(1, 1); // 5
points(7, 5); // 29
points(38, 8); // 100

// Basic Variable Assignment
const result = (name) => { return `${name}edabit.` };

result('Mubashir') // Mubashiredabit.
result('Matt') // Mattedabit.
result('javaScript') // javaScriptedabit.

// less than 100
const lessThan100 = (number5, number6) => { return (number5 + number6) < 100 ? true : false };

lessThan100(2, 7); // 9 - true
lessThan100(20, 81); // 101 - false
lessThan100(3, 77); // 80 - true

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
addUp(4); // 1+2+3+4=11


/**
 * Create a function that takes a number (step) as an argument and returns the number of matchsticks in that step
 * https://edabit.com/challenge/tYHkTdFrEmWfxpPKF
 * @param {*} step
 * @returns
 */
const matchStick = (step) => (step * 6) - (step - 1);

matchStick(4) // (4*6)-(4-1)=21

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
const getHour12 = hour => hour - 12;

/**
 * Write a JavaScript program to display the current day and time in the following format.
* Sample Output : Today is : Tuesday.
* Current time is : 10 PM : 30 : 38
 * @param {*} date
 */
const printDate = (date) => {
  const weekday = getWeekDay(date.getDay()); // 0 -> Sunday, 1 = Monday, ...
  const hour = date.getHours();

  return `Today is : ${weekday}.
  Current time is : ${getHour12(hour)} ${getAmPm(hour)} : ${date.getMinutes()} : ${date.getSeconds()}`;
}

// const hour = printDay.getHours();
// const minute = printDay.getMinutes();
// const second = printDay.getSeconds();
// const noonOrNot = (hour >= 12) ? 'PM' : 'AM';
//     hour = (hour >= 12) ? hour - 12 : hour;

printDate(new Date()); //? print current date

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

printDay(new Date());
printDay(new Date(1996, 11, 22));

/**
 * Write a JavaScript program to find the area of a triangle where three sides are 5, 6, 7.
 */
//?
const areaTriangle = (num1, num2, num3) => {
  const p = (num1 + num2 + num3) / 2;
  return Math.sqrt(p * (p - num1) * (p - num2) * (p - num3));
}
areaTriangle(5, 6, 7)

/**
 * Write a JavaScript program to find out if 1st January will be a Sunday between 2014 and 2050.
 */
function findYearJan01() {
  let year = 2015;
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
const result1 = multi(10, 12);
result1

const divis = (n3, n4) => n3 / n4;
const result2 = divis(12, 10)
result2

/**
 * Write a JavaScript program to convert temperatures to and from Celsius, Fahrenheit.
[ Formula : c/5 = (f-32)/9 [ where c = temperature in Celsius and f = temperature in Fahrenheit ]
Expected Output :
60°C is 140 °F
45°F is 7.222222222222222°C
 */
const convertFToC = (f) => c = ((f - 32) * 5) / 9;
const r1 = convertFToC(80);
r1
const convertCToF = (celcius) => fahrenheit = ((celcius * 9) / 5) + 32;
const r2 = convertCToF(28);
r2

/**
 *  Write a JavaScript program to get the difference between a given number and 13,
 * if the number is broader than 13 return double the absolute difference.
 */
const givenNum = (number2) => number2 > 13 ? (number2 - 13) * 2 : (13 - number2);
const q = givenNum(34);
q

/**
 * Write a JavaScript program to compute the sum of the two given integers.
 * If the two values are the same, then return triple their sum.
 */
const sumOfTwoIntegers = (n5, n6) => n5 === n6 ? (n5 + n6) * 3 : (n5 + n6);
const w = sumOfTwoIntegers(7, 7)
w

/**
 * Write a JavaScript program to compute the absolute difference between a specified number and 19.
 * Returns triple the absolute difference if the specified number is greater than 19.
 */
const diffNumerAnd19 = (n7) => n7 > 19 ? (n7 - 19) * 3 : '';
const t = diffNumerAnd19(2)
t

/**
 *  Write a JavaScript program to check a pair of numbers and return true if one of the numbers is 50 or if their sum is 50.
 */
const checkNumber = (n8, n9) => ((n8 + n9 === 50) || n8 === 50 || n9 === 50) ? true : '';
const p = checkNumber(30, 20)
p

/**
 *  Write a JavaScript program to check whether a given integer is within 20 of 100 or 400.
 */
const checkIntegerWithin20Of100Or400 = (n10) => Math.abs(100 - n10) <= 20 || Math.abs(400 - n10) <= 20 ? true : false;
const l = checkIntegerWithin20Of100Or400(20);
l

/**
 * Write a JavaScript program to check two given integers whether one is positive and another one is negative.
 */
const checkPosOrNeg = (n11, n12) => (n11 < 0 && n12 > 0) || (n11 > 0 && n12 < 0) ? true : false;

/**
 * Write a JavaScript program to create another string by adding "Py" in front of a given string.
 * If the given string begins with "Py" return the original string.
 */
const createString = (originalString) => originalString.substring(0, 2) === 'Py' ? originalString : `Py${originalString}`;

const m = createString('cachu');
m

/**
 *  Write a JavaScript program to remove a character at the specified position in a given string and return the modified string.
 */
const removeCharacterOfString = (givenString, removePosition) => newString = givenString.split('').splice(removePosition).join('');

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

}
