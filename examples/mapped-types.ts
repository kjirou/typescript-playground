type Mapped1 = {[K in 'x' | 'y']: number};

// OK
const m1: Mapped1 = {
  x: 1,
  y: 2,
};
// NG
//const m2: Mapped1 = {
//  x: 1,
//};

// P, K, T が何かは https://zenn.dev/qnighy/articles/dde3d980b5e386 が参考になった。
type NumericKeyOnly<K extends number, T> = { [P in K]: T }
type HttpStatusTexts = NumericKeyOnly<200 | 400 | 404, string>
const foo: HttpStatusTexts = {
  200: 'OK',
  400: 'Bad Request',
  404: 'Not Found',
  // NG
  //500: 'Internal Server Error',
  // NG
  //'200': 'Hi',
}

// P は T で使える変数であり、外側から受け取っているわけではない。
type MapNumberToNumber = { [P in number]: P }
const nn: MapNumberToNumber = {1: 2}

export {}
