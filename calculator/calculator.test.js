const calculator = require('./calculator');

test('add function test', () => {
  expect(calculator.add(15, 20)).toBe(35);
});

test('subtract function test', () => {
  expect(calculator.subtract(28, 19)).toBe(9);
});

test('divide function test', () => {
  expect(calculator.divide(25, 5)).toBe(5);
});

test('multiply function test', () => {
  expect(calculator.multiply(99, 98)).toBe(9702);
});
