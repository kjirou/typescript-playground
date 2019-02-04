//
// String enums
// https://www.typescriptlang.org/docs/handbook/enums.html#string-enums
//
enum SE {
  Foo = "FOO",
  Bar = "BAR",
}
// OK
let a: SE = SE.Foo;
a = SE.Bar
// NG: こういう風には使えない
//const b: E1 = 'FOO';
//const c: E1 = 'Foo';
