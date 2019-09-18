const capitalize = require('./capitalize');

test('capitalize first word', () => {
  expect(capitalize('hello, world!')).toBe('Hello, world!');
});
