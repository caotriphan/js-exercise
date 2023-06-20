const lib = require('./index')

test('additional should work', () => {
  expect(lib.addition(1)).toBe(2);
  expect(lib.addition(2)).toBe(3);
  expect(lib.addition(10)).toBe(11);
});

test('converting minute to second should work', () => {
  expect(lib.convertMintoSec(1)).toBe(60);
  expect(lib.convertMintoSec(2)).toBe(120);
  expect(lib.convertMintoSec(10)).toBe(600);
});

test('converting hour to second should work', () => {
  expect(lib.convertHourtoSec(1)).toBe(3600);
  expect(lib.convertHourtoSec(2)).toBe(7200);
  expect(lib.convertHourtoSec(10)).toBe(36000);
});

test('calculating age in day should work', () => {
  expect(lib.calcAge(1)).toBe(365);
  expect(lib.calcAge(2)).toBe(730);
  expect(lib.calcAge(10)).toBe(3650);
});

test('Triangle Area should work', () => {
  expect(lib.triArea(2, 4)).toBe(4);
  expect(lib.triArea(6, 8)).toBe(24);
  expect(lib.triArea(10, 12)).toBe(60);
});

test('Cubing a number should work', () => {
  expect(lib.cubesANumber(2)).toBe(8);
  expect(lib.cubesANumber(6)).toBe(216);
  expect(lib.cubesANumber(10)).toBe(1000);
});

test('Power calculation should work', () => {
  expect(lib.powerCalculator(2, 3)).toBe(6);
  expect(lib.powerCalculator(6, 8)).toBe(48);
  expect(lib.powerCalculator(10, 12)).toBe(120);
});

test('Maximun edge of triangle should work', () => {
  expect(lib.maximumEdgeOfTriangle(2, 3)).toBe("The Maximum range of a triangle's third edge is 4");
  expect(lib.maximumEdgeOfTriangle(6, 8)).toBe("The Maximum range of a triangle's third edge is 13");
  expect(lib.maximumEdgeOfTriangle(10, 12)).toBe("The Maximum range of a triangle's third edge is 21");
});

test('Remainder should work', () => {
  expect(lib.remainder(2, 3)).toBe(2);
  expect(lib.remainder(-6, 8)).toBe(-6);
  expect(lib.remainder(10, 10)).toBe(0);
});

test('Finding perimeter of a Rectangle should work', () => {
  expect(lib.findPerimeter(2, 4)).toBe(12);
  expect(lib.findPerimeter(6, 8)).toBe(28);
  expect(lib.findPerimeter(10, 12)).toBe(44);
});

test('Giving somthing should work', () => {
  expect(lib.giveMeSomething('something')).toBe('Something something');
  expect(lib.giveMeSomething('is better tha nothing')).toBe('Something is better tha nothing');
});

test('Squared number should work', () => {
  expect(lib.squaredNumber(2)).toBe(4);
  expect(lib.squaredNumber(4)).toBe(16);
  expect(lib.squaredNumber(5)).toBe(25);
});

test('Less than or equal to zero should work', () => {
  expect(lib.lessThanOrEqualToZero(4)).toBe(false);
  expect(lib.lessThanOrEqualToZero(0)).toBe(true);
  expect(lib.lessThanOrEqualToZero(-2)).toBe(true);
});
