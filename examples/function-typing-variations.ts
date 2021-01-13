/*
 * 忘れがちな様々な関数構文に対する型の付け方
 */

const foo = (a: number, b: number): number => {
  return a + b;
};
foo(1, 2);

const bar: (a: number, b: number) => number = (a, b) => {
  return a + b;
};
bar(1, 2);

export {}
