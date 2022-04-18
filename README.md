# fzo

## motivation

```js
const num = 42;
num = 72; // error! ok

const str = 'string';
str = 'str'; // error! ok

const arr = [1, 2, 3, 4, 5];
arr = [4, 4, 2]; // error! ok

arr[0] = 42;
// arr[0] is 1? 42?
console.log(arr[0]); // 42 wow...

arr[72] = 72;
console.log(arr[72]); // 72
console.log(arr); // 42, 2, 3, 4, 5, ...null..., 72 wow...

const obj = {
  kugimiya: 'rie',
  murakawa: 'rie',
  takahashi: 'rie',
  tanaka: 'minami',
};

// hmmm...
obj.tanaka = 'rie';

// obj.tanaka is "manami"? "rie?"
console.log(obj.tanaka); // "rie" wow...

obj.kanda = 'rie';
console.log(obj.kanda); // "rie"

// const is not readonly? :<
```

I have come to realize a strange truth.

But we can freeze Objects and Arrays using Object.freeze()

```js
const arr = [1, 2, 3, 4, 5];
Object.freeze(arr);

arr[0] = 42;
arr[72] = 74;

console.log(arr); // [1, 2, 3, 4, 5] nice :)

const obj = {
  kugimiya: 'rie',
  murakawa: 'rie',
  takahashi: 'rie',
  tanaka: 'minami',
};
Object.freeze(obj);
obj.kanda = 'rie';

console.log(obj);
// { kugimiya:"rie", murakawa:"rie", takahashi:"rie", tanaka:"minami" } nice :)

// is perfect?

const formation = [
  [4, 4, 2],
  [3, 4, 3],
  [3, 5, 2],
  [5, 5, 0],
  {
    classic: {
      wm: '3-2-2-3',
    },
  },
];

Object.freeze(formation);
formation[0] = [4, 5, 1];
console.log(formation[0]); // [4, 4, 2] nice :?

formation[3512] = [3, 5, 1, 2];
console.log(formation); // immutable :)

formation[0][1] = 5;
formation[0][2] = 1;
console.log(formation[0]); // [4, 5, 1] wow...

formation[4].modern = { Lavolpiana: '3-2-2-3' };
console.log(formation[4]); // { classic: {...}, modern: {...}} wow..

const voiceActor = {
  minami: 'tanaka',
  rie: {
    kugimiya: 'rie',
    murakawa: 'rie',
    takahashi: 'rie',
    tanaka: 'rie',
  },
};
Object.freeze(voiceActor);

voiceActor.minami = 'tsuda';
console.log(voiceActor.minami); // "tanaka" nice :?

voiceActor.rie.tanaka = 'minami';
console.log(voiceActor.rie.tanaka); // "minami" is not "rie" wow... :<
```

We all like "pure," but the truth, world is not pure.

But we must aspire to the maximum of purity.

So, let's go on a journey for "pure".

## Installation

### browser

```html
<script src="https://cdn.jsdelivr.net/npm/fzo@latest"></script>
```

### npm & node.js

```bash
npm i fzo
```

```js
const arr = [1, 2, 3, [4, 5, 6, 7]];

const _ = require('fzo');
_.fzo(arr);

const { fzo } = require('fzo');
fzo(arr);
```

## License

[Apache 2.0](https://github.com/rewrite0w0/fzo/blob/main/LICENSE)
