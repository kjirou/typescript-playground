/*
 * Symbol を使うために --lib es2015 が必要
 */

type Obj = {
  [key: string]: number,
};

// OK
const o1: Obj = {
  x: 1,
  y: 2,
};

// NG
const o2: Obj = {
  x: 1,
  y: 'b',
};

const s = Symbol();

// OK だった
const o3: Obj = {
  x: 1,
  [Symbol()]: 2,
};
