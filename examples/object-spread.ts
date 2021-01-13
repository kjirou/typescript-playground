type Point2D = {
  x: number,
  y: number,
};
type Point3D = {
  x: number,
  y: number,
  z: number,
};

const point2D: Point2D = {x: 1, y: 2};
const point3D = {...point2D, z: 3};

// NG
//point3D.foo = 1;

// NG
//const point3Db: Point3D = {...point2D, z: 'a'};

const point3Dc = {...point2D, z: 3, foo: 1};

// NG
//const point3Dd: Point3D = {...point2D, z: 3, foo: 1};

// OK: "xx" は存在しないので NG になって欲しかったけど通る。
//     おそらくは、Object Spreading により `{x: number, y: number, xx: number} | {x: number, y: number}` と
//       推論された値を Point2D だと明示的に宣言しているので、明示的な宣言を信じて後者と解釈されている。
const flag = true;
const invalidPoint2D: Point2D = {
  x: 1,
  y: 2,
  ...(flag ? {xx: 11} : {})
};

export {}
