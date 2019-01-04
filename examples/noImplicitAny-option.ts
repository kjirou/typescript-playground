/*
 * --noImplicitAny
 */

function withImplicitAny(x) {
  console.log(x);
}

function noImplicitAny(x: any) {
  console.log(x);
}
