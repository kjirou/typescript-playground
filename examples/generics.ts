//
// シンプルな例
//
function toXProp<T>(x: T): {x: T} {
  return {x};
}

// OK
const o1: {x: number} = toXProp(1);
// NG
//const o2: {x: number} = toXProp('a');


//
// .call や .apply の呼び出しが --strictBindCallApply で変わる例
//

// NG: --strictBindCallApply なしなら OK
//const ary1: number[] = Array.prototype.map.call([1, 2], v => v * v);

// OK: 型引数で map の挙動を全部書く方法
const ary2 = Array.prototype.map.call<number[], [(v: number) => number], number[]>([1, 2], v => v * v);
const ary3 = Array.prototype.map.apply<number[], [(v: number) => number], number[]>([1, 2], [v => v * v]);


//
// Generic Constraints
// https://www.typescriptlang.org/docs/handbook/generics.html#generic-constraints
//

// NG
//function loggingIdentity<T>(arg: T): T {
//  console.log(arg.length);  // Error: T doesn't have .length
//  return arg;
//}

// NG: 一応手で書いてみた
//function forceToFixed<T>(arg: T): string {
//  return arg.toFixed();
//}

// OK
function loggingIdentity1<T extends {length: number}>(arg: T): T {
  console.log(arg.length);
  return arg;
}
// NG
//loggingIdentity1(3);
// OK
loggingIdentity1('3');
loggingIdentity1([3]);

// OK
function forceToFixed1<T extends number>(arg: T): string {
  return arg.toFixed();
}
// NG
//forceToFixed1('3');
// OK
forceToFixed1(3);
