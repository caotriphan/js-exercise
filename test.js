const lib = require('./index')

test('additional should work', () => {
  expect(lib.addition(1)).toBe(2);
  expect(lib.addition(2)).toBe(3);
  expect(lib.addition(10)).toBe(11);
});
