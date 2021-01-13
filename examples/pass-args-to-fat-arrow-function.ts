const foo = <T> (a: T): T => {
  return a
}

foo<boolean>(true)
foo<number>(1)
foo<string>('a')

export {}
