type Foo = {
  x: () => number,
  y?: () => number,
};

type X = Foo['x'];
type Y = Foo['y'];

let x: X = () => 1;
let y: Y = () => 2;

// NG
//x = undefined;
// OK
y = undefined;


type Bar = {
  a: {
    x: number,
  },
  b?: {
    y: number,
  },
};

type Ax = Bar['a']['x'];
type By = Bar['b']['y'];

// OK
let ax: Ax = 1;
// NG
//let by: By = 2;
