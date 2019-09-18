const arrayAnalysis = arr => {
  const object = {};
  const index = arr.length;
  object.average = Math.round(arr.reduce((a, b) => a + b, 0) / index);
  object.min = arr.sort().shift(0);
  object.max = arr.sort((a, b) => a - b).pop();
  object.length = index;
  return object;
};

module.exports = arrayAnalysis;
