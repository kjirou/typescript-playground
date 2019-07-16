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
