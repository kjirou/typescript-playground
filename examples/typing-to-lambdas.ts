/*
 * => 表記の無名関数への型付けがいまいちわからないので調査
 */

//
// ローカル変数への代入の場合
//

// OK: 戻り値への型付けもしたい場合
const fn1: (v: number) => number = v => v;
// OK: 戻り値への型付けは不要な場合
const fn2 = (v: number) => v;

//
// プロパティへの代入の場合
//

// OK: 全体に付与する以外に方法がなさそう
const obj1: {
  fn: (v: number) => number,
} = {
  fn: v => v,
};

//
// 引数内に直接記述して渡す場合
//

// OK: ローカル変数代入とは異なり : の後に戻り値の型を書ける
const foo = [1, 2].map((v: number): number => v);

export {}
