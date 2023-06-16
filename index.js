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
const power = (side1, side2) => { return console.log(`The Maximum range of a triangle's third edge is ${Math.floor((side1 + side2) - 1)}`) };
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
