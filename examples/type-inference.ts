/*
 * 型推論
 */

//
// typeof と if の違い
//
function identify1(arg: string | null) {
  return arg;
}
// NG
//identify1('a').toUpperCase();

function identify2(arg: string | null) {
  if (arg !== null) {
    return arg;
  }
  return '';
}
// OK
identify2('a').toUpperCase();

function identify3(arg: string | null) {
  if (typeof arg === 'string') {
    return arg;
  }
  return '';
}
// OK
identify3('a').toUpperCase();

export {}
