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
