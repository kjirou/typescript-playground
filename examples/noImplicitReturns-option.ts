/*
 * --noImplicitReturns
 */

const foo = (x) => {
  if (x > 1) {
    return 'foo';
  }
};

foo(2).toUpperCase();
