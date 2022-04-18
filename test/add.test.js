const { add } = require('../src/index');

test('add', () => {
  expect(add(10, 20)).toBe(30);
});
