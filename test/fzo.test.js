const { fzo } = require('../src/index');

test('freeze object', () => {
  const arrayTest = [1, 2, 3, 4, 5];
  expect(Object.isFrozen(fzo(arrayTest))).toBe(true);
});
