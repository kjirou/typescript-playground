//
// any のアップキャストに as 宣言しなくても良い。
//
const a: any = 1;
// OK
let b: number = a;
// OK
let c = a as number;

//
// any 以外のアップキャストは as が必要っぽい
//
const x: string | number = Math.random() > 0.5 ? 'a' : 1;
// NG
//let y: string = x;
// OK
let z = x as number;
z.toFixed();

export {}
