export interface Option<T> {
  isSome(): this is Some<T>
  isNone(): this is None<T>
  unwrap(): T
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
}

export function some<T>(value: T): Some<T> {
  return new Some(value)
}

export function none<T>(): None<T> {
  return new None()
}
