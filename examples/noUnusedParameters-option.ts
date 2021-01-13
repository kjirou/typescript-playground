/*
 * --noUnusedParameters
 */

const fooNg = (x) => {
};

const fooOk1 = (x) => {
  return x;
};

const fooOk2 = (x) => {
  Math.floor(x);
};

const fooOk3 = (x) => {
  const y = x;
};

const fooOk4 = (x) => {
  +x;
};

export {}
