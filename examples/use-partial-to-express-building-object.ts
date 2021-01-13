/*
 * 長大なオブジェクトのプロパティひとつひとつに順番で値を詰めたい場合に、
 * Partial と as を使って詰められるようにしてもいいのだろうか？
 *
 * 結論) そもそも全然ダメで、例えば fooBuilding.x がなくても as Foo の時にエラーにならなかった。
 */

type Foo = {
  x: number,
  y?: number,
  z: number,
};
type PartialFoo = Partial<Foo>;

const yExists = Math.random() < 0.5;

const fooBuilding: PartialFoo = {};
fooBuilding.x = 1;
if (yExists) {
  fooBuilding.y = 2;
}
fooBuilding.z = 3;
// これがあると NG
//fooBuilding.a = 11;

const foo: Foo = fooBuilding as Foo;

console.log(foo);

export {}
