const caesarCipher = require('./caesar-cipher');

test('shift 15', () => {
  expect(caesarCipher('absolute', 15)).toBe('pqhdajit');
});

test('case sensitive', () => {
  expect(caesarCipher('Caesar', 5)).toBe('Hfjxfw');
});

test('work with  non-letter', () => {
  expect(caesarCipher('Hello, World!', 12)).toBe('Tqxxa, Iadxp!');
});

test('work with  non-letter-2', () => {
  expect(caesarCipher('!sdFg+/%??* a52!aY', 20)).toBe('!mxZa+/%??* u52!uS');
});
