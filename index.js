// 1. Return the Next Number from the Integer Passed
const addition = (num) => num += 1;

addition(1);
addition(10);
addition(-8);

// 2. get first value
const getFirstValue = [1, 2, 3];
const getFirstValue1 = [80, 5, 100];
const getFirstValue2 = [-500, 0, 50];

console.log(getFirstValue[0]); // 1
console.log(getFirstValue1[0]); // 80
console.log(getFirstValue2[0]); // -500

// convert minute to seconds
function convert(minutes) {
  return minutes * 60;
}

console.log(convert(5));
console.log(convert(3));
console.log(convert(2));

// covert hour to second
function convert(hour) {
  return hour * 60 * 60;
}

// calc age in days
function calcAge(ageInYear) {
  const ageInDay = ageInYear * 365;
  return ageInDay;
};

calcAge(20);

//return sum of two number
const sum = (num1, num2) => { return num1 + num2 };

sum(2, 3); // 5

// Area of a Triangle
const triArea = (base, height) => { return (base * height) / 2 };

triArea(2, 3) // 3
triArea(10, 10) //50

//buggy code
const cubes = (number1) => { return number1 * number1 * number1 };

cubes(3) // 9
cubes(5) // 125
cubes(10) // 1000

// Power Calculator
const power = (voltage, current) => { return voltage * current };

power(4, 6) //24

//Maximum Edge of a Triangle
// const power = (side1, side2) => { return console.log(`The Maximum range of a triangle's third edge is ${Math.floor((side1 + side2) - 1)}`) };
power(7, 10) //The maximum range of a triangle's third edge is 16

// Return the Remainder from Two Numbers
const remainder = (num1, num2) => { return num1 % num2 };

remainder(1, 3); // 1
remainder(-9, 45); // -9
remainder(5, 5) // 0

// Find the Perimeter of a Rectangle
const findPerimeter = (width, height) => { return (width + height) * 2 };

findPerimeter(6, 7); // 26
findPerimeter(2, 9); // 22
findPerimeter(10, 20); // 60

// Return Something to Me!
const giveMeSomething = (a) => { return `Something ${a}` };
giveMeSomething('is better than nothing'); // Something is better than nothing

// Correct the mistakes
const squared = (number) => { return number * number };

squared(9); // 81
squared(2); // 4
squared(7); // 49

// Is the Number Less than or Equal to Zero?
const lessThanOrEqualToZero = (number) => { return number <= 0 ? true : false };

lessThanOrEqualToZero(3) // false
lessThanOrEqualToZero(-1) // true

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

  console.log(`Today is : ${weekday}.
  Current time is : ${getHour12(hour)} ${getAmPm(hour)} : ${date.getMinutes()} : ${date.getSeconds()}`);
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

  console.log(`Today is: ${mm}-${dd}-${yyyy}`);
  console.log(`Today is: ${mm}/${dd}/${yyyy}`);
  console.log(`Today is: ${dd}-${mm}-${yyyy}`);
  console.log(`Today is: ${dd}/${mm}/${yyyy}`);

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
console.log(findYearJan01())

/**
 * Write a JavaScript program where the program takes a random integer between 1 and 10, and the user is then prompted to input a guess number.
 * The program displays a message "Good Work" if the input matches the guess number otherwise "Not matched".
 */
function comparedNum(guessNumber) {
  const randomNum = Math.floor(Math.random() * 10);
  return guessNumber === randomNum ? 'Good Work' : 'Not Matched';
}
console.log(comparedNum(4))
//comparedNum(Number(prompt('enter a number from 1 to 10')))
