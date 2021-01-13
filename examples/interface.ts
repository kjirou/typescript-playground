interface Foo {
  name: string,
  age: number,
  getAge: () => number,
}

const foo: Foo = {
  name: 'Taro',
  age: 20,
  getAge: function() {
    return this.age;
  },
};

class Fooo implements Foo {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  getAge() {
    return this.age;
  }
}


//
// interface は同名の定義で拡張される
//
interface Hoge {
  x: number,
};

interface Hoge {
  y: number,
};

// OK
const hoge: Hoge = {
  x: 1,
  y: 2,
};


//
// undefined と null と (keyがない) undefined の関係
//
// void は undefined と等価
//
// --strict 前提
//
interface Taro {
  x: null,
  y: undefined,
  z?: number,
}

// OK
const taroOk1: Taro = {
  x: null,
  y: undefined,
};

// OK: z? は z: undefined を許容する
const taroOk2: Taro = {
  x: null,
  y: undefined,
  z: undefined,
};

// NG
// const taroNg1: Taro = {
//   x: undefined,
//   y: undefined,
// };

// NG
// const taroNg2: Taro = {
//   x: null,
//   y: null,
// };

// NG
// const taroNg3: Taro = {
//   x: null,
// };

export {}
