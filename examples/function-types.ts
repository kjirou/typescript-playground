interface Reducer<State> {
  (state: State, ...args: any[]): State,
}

type MyState = {
  a: number,
}

// 直接付与してみる。
{
  const add: Reducer<MyState> = (state, b: number) => {
    return {...state, a: state.a + b}
  }
  let myState: MyState = {a: 0}
  myState = add(myState, 2)
  // これが通るので、破綻している。
  myState = add(myState, 'a')
}

// 事後に検証してみる。
{
  const add = (state: MyState, b: number): MyState => {
    return {...state, a: state.a + b}
  }
  let myState: MyState = {a: 0}
  myState = add(myState, 2)
  // NG: 当たり前だけど通らない。
  // myState = add(myState, 'a')

  // TODO: 関数を実行する形式以外にやりかたがわからない。
  // type IsReducer<F> = F extends Reducer<MyState> ? true : false
}

export {}