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

// 3. convert minute to seconds
 function convert(minutes) {
  return minutes * 60;
}

console.log(convert(5));
console.log(convert(3));
console.log(convert(2));

// calc age in days
function calcAge(ageInYear) {
  const ageInDay = ageInYear * 365;
  return ageInDay;
};

calcAge(20);
