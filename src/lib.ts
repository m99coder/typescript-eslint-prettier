// ––– either
export type Either<S, F> = Success<S, F> | Failure<S, F>

export class Success<S, F> {
  readonly value: S

  constructor(value: S) {
    this.value = value
  }

  isSuccess(): this is Success<S, F> {
    return true
  }

  isFailure(): this is Failure<S, F> {
    return false
  }
}

export class Failure<S, F> {
  readonly value: F

  constructor(value: F) {
    this.value = value
  }

  isSuccess(): this is Success<S, F> {
    return false
  }

  isFailure(): this is Failure<S, F> {
    return true
  }
}

export const success = <S, F>(l: S): Either<S, F> => {
  return new Success(l)
}

export const failure = <S, F>(a: F): Either<S, F> => {
  return new Failure<S, F>(a)
}

// ––– option
export interface Option<T> {
  isSome(): this is Some<T>
  isNone(): this is None<T>
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
}

export class None<T> implements Option<T> {
  isSome(): this is Some<T> {
    return false
  }

  isNone(): this is None<T> {
    return true
  }
}

export function some<T>(value: T): Some<T> {
  return new Some(value)
}

export function none<T>(): None<T> {
  return new None()
}
