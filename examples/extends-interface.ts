interface Foo {
  xyz?: 'x' | 'y' | 'z';
}

interface Bar extends Foo {
  x: number,
}

const foo1: Foo = {xyz: 'x'};
const foo2: Foo = {xyz: undefined};
const foo3: Foo = {};

export {}
