/*
 * 長大なオブジェクトのプロパティひとつひとつに順番で値を詰めたい場合に、
 * Partial と as を使って詰められるようにしてもいいのだろうか？
 */

type Foo = {
  x: number,
  y: number,
  z?: number,
};
type PartialFoo = Partial<Foo>;

const zExists = Math.random() < 0.5;

const fooBuilding: PartialFoo = {};
fooBuilding.x = 1;
fooBuilding.y = 2;
if (zExists) {
  fooBuilding.z = 3;
}
fooBuilding.a = 11;

const foo: Foo = fooBuilding as Foo;

console.log(foo);
