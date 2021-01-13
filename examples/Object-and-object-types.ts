//
// Object
//
const o1: Object = 4;

// OK: Object.prototype has `hasOwnProperty`.
o1.hasOwnProperty('foo');
// NG: Object.prototype does not have `toFixed`.
o1.toFixed();


//
// object
//
const foo = (o: object) => {};

// OK
foo({});
// NG
foo(4);

export {}
