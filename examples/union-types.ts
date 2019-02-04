/*
 * Union Types
 *
 * https://www.typescriptlang.org/docs/handbook/advanced-types.html#union-types
 */

//
// これが通るのが謎だけど、とりあえずは「確定している型情報が宣言より優先される」と考えておく。
//
const x: string | number = 1;
x.toFixed();


//
// keyof object による動的な型生成
//
interface O {
  x: number,
  y: number,
}
const o1: O = {
  x: 1,
  y: 2,
};
let k: keyof O = 'x';
// OK
k = 'y';
// NG
//k = 'z';

const o2 = {
  x: 1,
  y: 2,
};
// NG: 変数から直接は無理っぽい
//let l: keyof o2;
