class Foo {
  getX() {}
}

class Bar extends Foo {
  getY() {}
}

// NG: これらは may be a mistake って言われて無理
// const str1 = 'a' as number;
// const foo1 = new Foo() as number;

// OK: 一般的にアップキャストと呼ばれ、安全と言われる
const bar1 = new Bar() as Foo;
bar1.getX();  // OK
// bar1.getY();  // NG: NG にしてくれるから安全

// OK: 一般的にダウンキャストと呼ばれ、安全ではないと言われる
const foo2 = new Foo() as Bar;
foo2.getX();  // OK
foo2.getY();  // OK: OK になっちゃうから安全ではない

// OK: こういう書き方もできる
const bar2 = <Foo>new Bar();
bar2.getX();  // OK
// bar2.getY();  // NG: 期待通り

export {}
