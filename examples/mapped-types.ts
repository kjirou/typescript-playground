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

export {}
