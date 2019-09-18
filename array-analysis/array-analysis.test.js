const arrayAnalysis = require('./array-analysis');

test('simple array test 1', () => {
  expect(arrayAnalysis([10, 20, 30, 40, 50])).toEqual({ average: 30, min: 10, max: 50, length: 5 });
});

test('simple array test 2', () => {
  expect(arrayAnalysis([1, 8, 3, 4, 2, 6])).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6
  });
});

test('simple array test 3', () => {
  expect(arrayAnalysis([5, 25, 50, 0, 0, 100, 5, 5, 5, 5])).toEqual({
    average: 20,
    min: 0,
    max: 100,
    length: 10
  });
});

test('works with floats', () => {
  expect(arrayAnalysis([10, 20, 30, 7])).toEqual({
    average: 17,
    min: 10,
    max: 30,
    length: 4
  });
});
