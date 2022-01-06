type Either<S, F> = Success<S, F> | Failure<S, F>

class Success<S, F> {
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

class Failure<S, F> {
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

const success = <S, F>(l: S): Either<S, F> => {
  return new Success(l)
}

const failure = <S, F>(a: F): Either<S, F> => {
  return new Failure<S, F>(a)
}

type DomainError = {
  message: string
}

// this would require to define the message on the client side, instead we will create classes
// type UserAlreadyExists = DomainError
// type EmailInvalid = DomainError
// type PasswordDoesntMeetCriteria = DomainError
// type UsernameTaken = DomainError

class UserAlreadyExists implements DomainError {
  public message: string

  constructor(username: string) {
    this.message = `The username ${username} is already taken.`
  }
}

class EmailInvalid implements DomainError {
  public message: string

  constructor(email: string) {
    this.message = `The email ${email} is invalid.`
  }
}

class PasswordDoesntMeetCriteria implements DomainError {
  public message: string

  constructor(password: string) {
    this.message = `A password must be …, ${password} is not valid.`
  }
}

class UsernameTaken implements DomainError {
  public message: string

  constructor(username: string) {
    this.message = `The ${username} is already in use.`
  }
}

type CreateUserRequest = {
  email: string
  password: string
}

// type CreateUserSuccess = {
//   id: string
// }
class CreateUserSuccess {
  id: string

  constructor(id: string) {
    this.id = id
  }
}

type CreateUserResult = Either<
  CreateUserSuccess,
  | UserAlreadyExists
  | EmailInvalid
  | PasswordDoesntMeetCriteria
  | UsernameTaken
  | ApplicationError
>

interface ApplicationError {
  message: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  error?: any
}

class DatabaseError implements ApplicationError {
  message: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  error?: any

  constructor(error: string) {
    this.message = 'A database error occurred'
    this.error = error
  }
}

type User = {
  id: string
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function createUser(request: CreateUserRequest): CreateUserResult {
  const userAlreadyExists = () => {
    return false
  }
  const isEmailValid = () => {
    return true
  }
  const passwordMatchesCriteria = () => {
    return true
  }
  const isUsernameTaken = () => {
    return false
  }

  if (userAlreadyExists()) {
    return failure(new UserAlreadyExists(request.email))
  }
  if (!isEmailValid()) {
    return failure(new EmailInvalid(request.email))
  }
  if (!passwordMatchesCriteria()) {
    return failure(new PasswordDoesntMeetCriteria(request.password))
  }
  if (isUsernameTaken()) {
    return failure(new UserAlreadyExists(request.email))
  }

  // create user, save it to the DB, and get the id
  // wrap I/O in try/catch
  // turn exceptions into meaningful errors
  let user
  try {
    user = { userId: 'user-id-123' }
  } catch (err) {
    if (err instanceof Error) {
      return failure(new DatabaseError(err.message))
    }
  }

  // TODO: find a type-safe way to express that `user` is valid here
  return success(new CreateUserSuccess(user?.userId || ''))
}

type Nothing = null | undefined | ''

// eslint-disable-next-line @typescript-eslint/no-unused-vars
class UserService {
  async getUserById(): Promise<User | Nothing> {
    const userOrNothing = await Promise.resolve({ id: 'user-id-123' } as User)
    return userOrNothing ? userOrNothing : ('' as Nothing)
  }
}
