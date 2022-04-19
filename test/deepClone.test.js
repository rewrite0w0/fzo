const { deepClone } = require('../src/index');

test('array clone', () => {
  const arrayTest = [1, 2, 3, 4, 5];
  const cloneArray = deepClone(arrayTest);
  cloneArray.push(10);
  const compare = arrayTest.length === cloneArray.length;
  expect(compare).toBe(false);
});

test('deep array clone: whole(arr)', () => {
  const deepArrayTest = [
    [[1, 2, 3, 4, 5], 6, 7, 8, 9],
    { a: '1', b: '2', A: '3', B: '4' },
    7,
    8,
    9,
  ];
  const cloneArray = deepClone(deepArrayTest);
  cloneArray[0].push(10);
  const compare = deepArrayTest[0].length === cloneArray[0].length;

  expect(compare).toBe(false);
});

test('deep array clone: whole', () => {
  const deepArrayTest = [
    [[1, 2, 3, 4, 5], 6, 7, 8, 9],
    { a: '1', b: '2', A: '3', B: '4' },
    7,
    8,
    9,
  ];
  const cloneArray = deepClone(deepArrayTest);
  cloneArray[1].neo = 'neo';

  const compare = deepArrayTest[1] === cloneArray[1];

  expect(compare).toBe(false);
});

test('deep array clone: [0]', () => {
  const deepArrayTest = [
    [[1, 2, 3, 4, 5], 6, 7, 8, 9],
    { a: '1', b: '2', A: '3', B: '4' },
    7,
    8,
    9,
  ];
  const cloneArray = deepClone(deepArrayTest);
  cloneArray[0].push(42);

  const compare = deepArrayTest.length[0] === cloneArray[0].length;

  expect(compare).toBe(false);
});

test('deep array clone: [0][0]', () => {
  const deepArrayTest = [
    [[1, 2, 3, 4, 5], 6, 7, 8, 9],
    { a: '1', b: '2', A: '3', B: '4' },
    7,
    8,
    9,
  ];
  const cloneArray = deepClone(deepArrayTest);
  cloneArray[0][0].push(42);

  const compare = deepArrayTest[0][0] === cloneArray[0][0];

  expect(compare).toBe(false);
});

test('deep array clone: [0][0][0]', () => {
  const deepArrayTest = [
    [[1, 2, 3, 4, 5], 6, 7, 8, 9],
    { a: '1', b: '2', A: '3', B: '4' },
    7,
    8,
    9,
  ];
  const cloneArray = deepClone(deepArrayTest);
  cloneArray[0][0][0] = 42;

  const compare = deepArrayTest[0][0][0] === cloneArray[0][0][0];

  expect(compare).toBe(false);
});

test('object clone: whole', () => {
  const objectTest = { a: '1', b: '2', A: '3', B: '4' };
  const objectClone = deepClone(objectTest);

  objectClone.neo = 'new';

  const compare = objectTest.neo === objectClone.neo;

  expect(compare).toBe(false);
});

test('object clone: a', () => {
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

  const objectClone = deepClone(deepObjectTest);

  objectClone.a = 'new';

  const compare = deepObjectTest.a === objectClone.a;

  expect(compare).toBe(false);
});

test('object clone: a.z', () => {
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

  const objectClone = deepClone(deepObjectTest);

  objectClone.a.z = 'new';

  const compare = deepObjectTest.a.z === objectClone.a.z;

  expect(compare).toBe(false);
});

test('object clone: a.z.i', () => {
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

  const objectClone = deepClone(deepObjectTest);

  objectClone.a.z.i = 'new';

  const compare = deepObjectTest.a.z.i === objectClone.a.z.i;

  expect(compare).toBe(false);
});

test('object clone: b', () => {
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

  const objectClone = deepClone(deepObjectTest);

  objectClone.b.push(42);

  const compare = deepObjectTest.b.length === objectClone.b.length;

  expect(compare).toBe(false);
});
