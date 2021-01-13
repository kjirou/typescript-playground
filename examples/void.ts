// OK: ?
let a: void;
a = undefined;

// OK: ????????
type Obj = {
  a: string | void,
};
const o: Obj = {
  a: 's',
};
o.a = undefined;

export {}
