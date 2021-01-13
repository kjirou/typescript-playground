/*
 * --suppressExcessPropertyErrors
 *
 * Ref) https://github.com/Microsoft/TypeScript/wiki/Breaking-Changes#strict-object-literal-assignment-checking
 */

// suppressExcessPropertyErrors がないと NG
// let x: { foo: number };
// x = { foo: 1, baz: 2 };

// suppressExcessPropertyErrors なしでも OK
// Object.assign を使うには "--lib ES2015" が必要
let o: { x: number, y: number };
o = Object.assign({x: 1}, {y: 2});

export {}
