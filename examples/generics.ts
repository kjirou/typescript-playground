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
