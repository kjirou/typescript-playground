/*
 * --noUnusedLocals
 */

// OK
const foo = 1;

// OK
const bar = (x) => {
};

const baz = () => {
  // NG
  const x = 1;
};
