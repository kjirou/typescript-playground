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
