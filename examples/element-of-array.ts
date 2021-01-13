//
// なんでこれ通るんだろう？
// getByIndex の戻り値って ArrayElement | void ではないのか？
//
function getByIndex<ArrayElement>(ary: ArrayElement[], index: number) {
  return ary[index];
}
const list: string[] = ['a', 'b'];
const elem = getByIndex<string>(list, 2);
elem.toUpperCase();


//
// こっちも通る
//
const list2: string[] = ['a'];
const elem2 = list2[Math.round(Math.random())];
elem2.toUpperCase();


//
// 一番シンプルにしたこれでも void の可能性を考えないので、
// 仕様っぽい
//
const a: string[] = [];
a[0].toUpperCase();

let b: string = 'a';
b = a[0];
// NG
//b = undefined;

export {}
