const reverseString = require('./reverse-string');

test('reverse simple string', () => {
  expect(reverseString('absolute')).toBe('etulosba');
});
