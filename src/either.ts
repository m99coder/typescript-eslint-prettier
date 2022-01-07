type Mapper<T, A> = (value: T) => A
type FailureMapper<F, X> = (error: F) => X
type Match<T, A, F> = { success: Mapper<T, A>; failure: FailureMapper<F, A> }

export interface Either<S, F> {
  isSuccess(): this is Success<S>
  isFailure(): this is Failure<F>
  unwrap(): S
  match<A>(branches: Match<S, A, F>): A
}

export class Success<S> implements Either<S, never> {
  readonly value: S

  constructor(value: S) {
    this.value = value
  }

  isSuccess(): this is Success<S> {
    return true
  }

  isFailure(): this is Failure<never> {
    return false
  }

  unwrap(): S {
    return this.value
  }

  match<A>(branches: Match<S, A, never>): A {
    return branches.success(this.value)
  }
}

export class Failure<F> implements Either<never, F> {
  readonly value: F

  constructor(value: F) {
    this.value = value
  }

  isSuccess(): this is Success<never> {
    return false
  }

  isFailure(): this is Failure<F> {
    return true
  }

  unwrap(): never {
    throw this.value
  }

  match<A>(branches: Match<never, A, F>): A {
    return branches.failure(this.value)
  }
}

export const success = <S>(s: S): Success<S> => {
  return new Success<S>(s)
}

export const failure = <F>(f: F): Failure<F> => {
  return new Failure<F>(f)
}
