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
