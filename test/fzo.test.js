const { fzo } = require('../src/index');

test('array freeze', () => {
  const arrayTest = [1, 2, 3, 4, 5];
  expect(Object.isFrozen(fzo(arrayTest))).toBe(true);
});

test('deep array freeze: whole', () => {
  const deepArrayTest = [
    [[1, 2, 3, 4, 5], 6, 7, 8, 9],
    { a: '1', b: '2', A: '3', B: '4' },
    7,
    8,
    9,
  ];
  expect(Object.isFrozen(fzo(deepArrayTest))).toBe(true);
});

test('deep array freeze: [0]', () => {
  const deepArrayTest = [
    [[1, 2, 3, 4, 5], 6, 7, 8, 9],
    { a: '1', b: '2', A: '3', B: '4' },
    7,
    8,
    9,
  ];
  expect(Object.isFrozen(fzo(deepArrayTest)[0])).toBe(true);
});

test('deep array freeze: [0][0]', () => {
  const deepArrayTest = [
    [[1, 2, 3, 4, 5], 6, 7, 8, 9],
    { a: '1', b: '2', A: '3', B: '4' },
    7,
    8,
    9,
  ];
  expect(Object.isFrozen(fzo(deepArrayTest)[0][0])).toBe(true);
});

test('deep array freeze: [0][0][0]', () => {
  const deepArrayTest = [
    [[1, 2, 3, 4, 5], 6, 7, 8, 9],
    { a: '1', b: '2', A: '3', B: '4' },
    7,
    8,
    9,
  ];
  expect(Object.isFrozen(fzo(deepArrayTest)[0][0][0])).toBe(true);
});

test('object freeze: whole', () => {
  const objectTest = { a: '1', b: '2', A: '3', B: '4' };
  expect(Object.isFrozen(fzo(objectTest))).toBe(true);
});

test('object freeze: a', () => {
  const deepObjectTest = {
    a: {
      x: 'x',
      y: 'y',
      z: {
        i: 'i',
        j: 'j',
        k: 'k',
      },
    },
    b: [1, 2, 3, 4, 5],
    A: '3',
    B: '4',
  };
  expect(Object.isFrozen(fzo(deepObjectTest.a))).toBe(true);
});

test('object freeze: a.z', () => {
  const deepObjectTest = {
    a: {
      x: 'x',
      y: 'y',
      z: {
        i: 'i',
        j: 'j',
        k: 'k',
      },
    },
    b: [1, 2, 3, 4, 5],
    A: '3',
    B: '4',
  };
  expect(Object.isFrozen(fzo(deepObjectTest.a.z))).toBe(true);
});

test('object freeze: a.z.i', () => {
  const deepObjectTest = {
    a: {
      x: 'x',
      y: 'y',
      z: {
        i: 'i',
        j: 'j',
        k: 'k',
      },
    },
    b: [1, 2, 3, 4, 5],
    A: '3',
    B: '4',
  };
  expect(Object.isFrozen(fzo(deepObjectTest.a.z.i))).toBe(true);
});

test('object freeze: b', () => {
  const deepObjectTest = {
    a: {
      x: 'x',
      y: 'y',
      z: {
        i: 'i',
        j: 'j',
        k: 'k',
      },
    },
    b: [1, 2, 3, 4, 5],
    A: '3',
    B: '4',
  };
  expect(Object.isFrozen(fzo(deepObjectTest.b))).toBe(true);
});
