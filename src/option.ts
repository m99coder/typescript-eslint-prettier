type Mapper<T, A> = (value: T) => A
type DefaultMapper<A> = () => A
type Match<T, A> = { some: Mapper<T, A>; none: DefaultMapper<A> }

export interface Option<T> {
  isSome(): this is Some<T>
  isNone(): this is None<T>
  unwrap(): T
  match<A>(branches: Match<T, A>): A
}

export class Some<T> implements Option<T> {
  readonly value: T

  constructor(value: T) {
    this.value = value
  }

  isSome(): this is Some<T> {
    return true
  }

  isNone(): this is None<T> {
    return false
  }

  unwrap(): T {
    return this.value
  }

  match<A>(branches: Match<T, A>): A {
    return branches.some(this.value)
  }
}

export class None<T> implements Option<T> {
  isSome(): this is Some<T> {
    return false
  }

  isNone(): this is None<T> {
    return true
  }

  unwrap(): never {
    throw new Error('Called `Option#unwrap()` on a `None` value')
  }

  match<A>(branches: Match<never, A>): A {
    return branches.none()
  }
}

export function some<T>(value: T): Some<T> {
  return new Some(value)
}

export function none<T>(): None<T> {
  return new None()
}
