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

test('SumPolygon should work', () => {
  expect(lib.sumPolygon(2)).toBe(undefined);
  expect(lib.sumPolygon(4)).toBe(360);
  expect(lib.sumPolygon(5)).toBe(540);
});

test('Basketball points should work', () => {
  expect(lib.basketballPoints(1, 1)).toBe(5);
  expect(lib.basketballPoints(7, 4)).toBe(26);
  expect(lib.basketballPoints(2, 4)).toBe(16);
});

test('Basic variable assignment should work', () => {
  expect(lib.basicVariableAssignment('something')).toBe('somethingedabit.');
  expect(lib.basicVariableAssignment(7)).toBe('7edabit.');
  expect(lib.basicVariableAssignment('Lucas')).toBe('Lucasedabit.');
});

test('AND should work', () => {
  expect(lib.bitwAND(4, 3)).toBe(0);
  expect(lib.bitwAND(6, 23)).toBe(6);
  expect(lib.bitwAND(1, 7)).toBe(1);
});

test('OR should work', () => {
  expect(lib.bitwOR(4, 3)).toBe(7);
  expect(lib.bitwOR(6, 23)).toBe(23);
  expect(lib.bitwOR(1, 7)).toBe(7);
});

test('Addup should work', () => {
  expect(lib.addUp(4)).toBe(10);
  expect(lib.addUp(6)).toBe(21);
  expect(lib.addUp(3)).toBe(6);
});

test('Matched sticks should work', () => {
  expect(lib.matchStick(4)).toBe(21);
  expect(lib.matchStick(6)).toBe(31);
  expect(lib.matchStick(3)).toBe(16);
});

test('Shift to left should work', () => {
  expect(lib.shiftToLeft(4, 3)).toBe(32);
  expect(lib.shiftToLeft(6, 8)).toBe(1536);
  expect(lib.shiftToLeft(2, 9)).toBe(1024);
});

test('Printing day should work', () => {
  expect(lib.printDate(new Date(2023, 5, 20))).toBe(`Today is : Tuesday.
  Current time is : 00 AM : 00 : 00`);
  expect(lib.printDate(new Date(2023, 5, 20, 13, 5))).toBe(`Today is : Tuesday.
  Current time is : 01 PM : 05 : 00`);
  expect(lib.printDate(new Date(2023, 5, 19, 23, 15, 50))).toBe(`Today is : Monday.
  Current time is : 11 PM : 15 : 50`);
});

test('Area of a triangle should work', () => {
  expect(lib.areaTriangle(4, 3, 5)).toBe(6);
  expect(lib.areaTriangle(6, 10, 8)).toBe(24);
  expect(lib.areaTriangle(6, 7, 9)).toBe(20.97617696340303);
});

test('Finding year had 01 Jan is Sunday should work', () => {
  expect(lib.findYearJan01(2015)).toBe(2017);
  expect(lib.findYearJan01(2018)).toBe(2023);
  expect(lib.findYearJan01(2024)).toBe(2034);
});

test('Covert F to C should work', () => {
  expect(lib.convertFToC(86)).toBe('30.00');
  expect(lib.convertFToC(72)).toBe('22.22');
  expect(lib.convertFToC(120)).toBe('48.89');
});

test('Covert C to F should work', () => {
  expect(lib.convertCToF(27)).toBe(80.6);
  expect(lib.convertCToF(15)).toBe(59);
  expect(lib.convertCToF(34)).toBe(93.2);
});

test('Given Number should work', () => {
  expect(lib.givenNum(27)).toBe(28);
  expect(lib.givenNum(9)).toBe(4);
  expect(lib.givenNum(34)).toBe(42);
});

test('summing of 2 integer should work', () => {
  expect(lib.sumOfTwoIntegers(4, 4)).toBe(24);
  expect(lib.sumOfTwoIntegers(3, 4)).toBe(7);
  expect(lib.sumOfTwoIntegers(5, 6)).toBe(11);
});

test('difference between number and 19 should work', () => {
  expect(lib.diffNumerAnd19(27)).toBe(24);
  expect(lib.diffNumerAnd19(15)).toBe(4);
  expect(lib.diffNumerAnd19(22)).toBe(9);
});

test('checking number and 19 should work', () => {
  expect(lib.checkNumber(20, 30)).toBe(true);
  expect(lib.checkNumber(10, 50)).toBe(true);
  expect(lib.checkNumber(40, 80)).toBe('');
});

test('changing the first and last character position should work', () => {
  expect(lib.changeFirstLastCharacter('conversation')).toBe('nonversatioc');
  expect(lib.changeFirstLastCharacter('navigate')).toBe('eavigatn');
  expect(lib.changeFirstLastCharacter('lucas')).toBe('sucal');
});

test('addinging the first character to front and back should work', () => {
  expect(lib.addFirstCharacterFronAndBack('conversation')).toBe('cconversationc');
  expect(lib.addFirstCharacterFronAndBack('navigate')).toBe('nnavigaten');
  expect(lib.addFirstCharacterFronAndBack('lucas')).toBe('llucasl');
});

test('addinging 3 last character to front and back should work', () => {
  expect(lib.last3CharacterAddingFrontAndBack('conversation')).toBe('ionconversationion');
  expect(lib.last3CharacterAddingFrontAndBack('navigate')).toBe('atenavigateate');
  expect(lib.last3CharacterAddingFrontAndBack('lu')).toBe(false);
});

test('checking string start with Java should work', () => {
  expect(lib.giveStringJava('JavaScript')).toBe(true);
  expect(lib.giveStringJava('navigate')).toBe(false);
  expect(lib.giveStringJava('lu')).toBe(false);
});

test('string has Script should work', () => {
  expect(lib.checkStringHasScript('Java123Script')).toBe('Java123Script');
  expect(lib.checkStringHasScript('navigate')).toBe('navigate');
  expect(lib.checkStringHasScript('lu')).toBe('lu');
  expect(lib.checkStringHasScript('JavaScript123')).toBe('Java123');
  expect(lib.checkStringHasScript('JavaScript123Script')).toBe('Java123Script');
  expect(lib.checkStringHasScript('')).toBe('');
  expect(lib.checkStringHasScript(null)).toBe(null);
});

test('max 3 numbers should work', () => {
  expect(lib.max3Numbers(1,2,3)).toBe(3);
  expect(lib.max3Numbers(1,1,1)).toBe(1);
  expect(lib.max3Numbers(3,2,1)).toBe(3);
  expect(lib.max3Numbers(3,2,3)).toBe(3);
  expect(lib.max3Numbers(2, 1, 3)).toBe(3);
});

test('closest to 100 should work', () => {
  expect(lib.closestValueto100(98, 20)).toBe(98);
  expect(lib.closestValueto100(120, 210)).toBe(120);
  expect(lib.closestValueto100(22, 89)).toBe(89);
});

test('checking number should work', () => {
  expect(lib.checkGivenNumber(98, 20)).toBe(false);
  expect(lib.checkGivenNumber(120, 210)).toBe(false);
  expect(lib.checkGivenNumber(54, 89)).toBe(true);
});

test('finding the largest number should work', () => {
  expect(lib.largestNumber(98, 20)).toBe('cannot find the largest one.');
  expect(lib.largestNumber(43, 55)).toBe(55);
  expect(lib.largestNumber(54, 89)).toBe('cannot find the largest one.');
});

test('finding charater should work', () => {
  expect(lib.checkGivenString('abcd', 'b')).toBe(true);
  expect(lib.checkGivenString('ab', 'b')).toBe(true);
  expect(lib.checkGivenString('a', 'b')).toBe(false);
  expect(lib.checkGivenString('b', 'b')).toBe(false);
});

test('checking 3 integer has the same last digit should work', () => {
  expect(lib.give3Integer(123, 298743, 3)).toBe(true);
  expect(lib.give3Integer(123, 23, 97329865)).toBe(false);
  expect(lib.give3Integer(2346, 82375, 28736)).toBe(false);
});

test('upper-lower case should work', () => {
  expect(lib.upperToLowerCase('ti')).toBe('TI');
  expect(lib.upperToLowerCase('Tri')).toBe('tri');
  expect(lib.upperToLowerCase('caotriphan')).toBe('cao');
});

test('Reverse case should work', () => {
  expect(lib.reverseCase('ti')).toBe('TI');
  expect(lib.reverseCase('Tri')).toBe('tRI');
  expect(lib.reverseCase('caotriphan')).toBe('CAOTRIPHAN');
});

test('Creating new array should work', () => {
  expect(lib.createNewArray([1, 2, 3, 4])).toEqual([1, 4]);
  expect(lib.createNewArray([3, 56, 7, 24])).toEqual([3, 24]);
  expect(lib.createNewArray([123, 24, 16, 97])).toEqual([123, 97]);
});

test('Finding the largest Element should work', () => {
  expect(lib.findTheLargestElement([1, 2, 3, 4])).toEqual([4, 4, 4, 4]);
  expect(lib.findTheLargestElement([3, 56, 7, 24])).toEqual([24, 24, 24, 24]);
  expect(lib.findTheLargestElement([123, 24, 16, 97])).toEqual([123, 123, 123, 123]);
});

test('Creating first and last n character should work', () => {
  expect(lib.createFirstLastNCharacter('tiphan', 2)).toBe('tian');
  expect(lib.createFirstLastNCharacter('Tri', 3)).toBe('TriTri');
  expect(lib.createFirstLastNCharacter('caotriphan', 4)).toBe('caotphan');
});

test('Remove first and last character should work', () => {
  expect(lib.removeFirstLastCharacter('tiphanp')).toBe('iphan');
  expect(lib.removeFirstLastCharacter('Tri')).toBe('Tri');
  expect(lib.removeFirstLastCharacter('caotriphan')).toBe('caotriphan');
});

test('Concatenating 2 string has the same length should work', () => {
  expect(lib.concatenate2StringHasSameLength('tiphanp', 'tri')).toBe('anptri');
  expect(lib.concatenate2StringHasSameLength('Tri', 'phancao')).toBe('Tricao');
  expect(lib.concatenate2StringHasSameLength('caotriphan', 'lucas')).toBe('iphanlucas');
});

test('getting the middle string has an odd length should work', () => {
  expect(lib.getMiddleStringOddLength('phancaotri')).toBe('');
  expect(lib.getMiddleStringOddLength('lucas')).toBe('uca');
  expect(lib.getMiddleStringOddLength('concatenate')).toBe('ate');
});

test('Moving 3 last charater to first should work', () => {
  expect(lib.move3LastCharater('phancaotri')).toBe('triphancao');
  expect(lib.move3LastCharater('lucas')).toBe('caslu');
  expect(lib.move3LastCharater('concatenate')).toBe('ateconcaten');
});

test('checking array containing 30 or 40 twice should work', () => {
  expect(lib.checkForArrayContain30Or40Twice([30, 2, 30, 4])).toEqual(true);
  expect(lib.checkForArrayContain30Or40Twice([3, 56, 7, 24])).toEqual(false);
  expect(lib.checkForArrayContain30Or40Twice([123, 40, 16, 40, 40])).toEqual(false);
  expect(lib.checkForArrayContain30Or40Twice([40])).toEqual(false);
  expect(lib.checkForArrayContain30Or40Twice([])).toEqual(false);
});

test('checking if 2 similar array should work', () => {
  expect(lib.isSimilarArray([1, 2, 3], [1, 2, 3])).toEqual(true);
  expect(lib.isSimilarArray([], [1, 2, 3, 4])).toEqual(false);
  expect(lib.isSimilarArray([1, 2, 3], [1, 3, 2])).toEqual(true);
});

template('Swapping the first and last charater should work', () => {
  isExpressionWithTypeArguments(lib.swapFirstLastInteger())
})
