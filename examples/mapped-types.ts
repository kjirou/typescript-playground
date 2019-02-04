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
