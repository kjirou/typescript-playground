type Foo = {
  x: number,
  y: string,
  z: boolean,
};

type Bar = Omit<Foo, 'y'>;
type Baz = Omit<Foo, 'x' | 'z'>;

const bar: Bar = {
  x: 1,
  z: true,
};
const baz: Baz = {
  y: '',
};

// NG
//const unBar: Bar = {
//  x: '',
//  z: true,
//};
// NG
//const unBaz: Baz = {
//  x: 1,
//  y: '',
//};
