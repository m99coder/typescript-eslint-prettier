import { Either, failure, success } from './either'
import { none, Option, some } from './option'

// ––– domain errors
type DomainError = {
  message: string
}

class UserAlreadyExists implements DomainError {
  public message: string

  constructor(email: string) {
    this.message = `A user with email ${email} already exists.`
  }
}

class PasswordDoesntMeetCriteria implements DomainError {
  public message: string

  constructor(password: string) {
    this.message = `The password ${password} doesn’t meet criteria.`
  }
}

// ––– application errors
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

// ––– request/response types
type CreateUserRequest = {
  email: string
  password: string
}

class CreateUserSuccess {
  id: string

  constructor(id: string) {
    this.id = id
  }
}

type CreateUserResult = Either<
  CreateUserSuccess,
  DomainError | ApplicationError
>

// ––– usage
function createUser(request: CreateUserRequest): CreateUserResult {
  const userAlreadyExists = (email: string) => {
    return email === 'john.doe@example.com'
  }
  const passwordMatchesCriteria = (password: string) => {
    return password.length > 7
  }

  if (userAlreadyExists(request.email)) {
    return failure(new UserAlreadyExists(request.email))
  }
  if (!passwordMatchesCriteria(request.password)) {
    return failure(new PasswordDoesntMeetCriteria(request.password))
  }

  try {
    if (request.password === 'password') {
      throw new Error('The worst password ever was used.')
    }
    return success(new CreateUserSuccess('user-id-123'))
  } catch (err) {
    if (err instanceof Error) {
      return failure(new DatabaseError(err.message))
    }
    return failure(new Error('Something went wrong'))
  }
}

// see: https://www.typescriptlang.org/docs/handbook/2/narrowing.html#using-type-predicates
function isApplicationError(
  e: ApplicationError | DomainError
): e is ApplicationError {
  return (e as ApplicationError).error !== undefined
}

const failureHandler = (f: DomainError | ApplicationError) => {
  if (isApplicationError(f)) {
    console.log(`Is failure: ${f.message}: ${f.error}`)
  } else {
    console.log(`Is failure: ${f.message}`)
  }
}

const createUserResultMatcher = {
  success: (s: CreateUserSuccess) => console.log(`Is success: ${s.id}`),
  failure: failureHandler,
}

// Failure: UserAlreadyExists
createUser({
  email: 'john.doe@example.com',
  password: 'easy',
}).match(createUserResultMatcher)

// Failure: PasswordDoesntMeetCriteria
createUser({
  email: 'jane.doe@example.com',
  password: 'easy',
}).match(createUserResultMatcher)

// Failure: DatabaseError
createUser({
  email: 'jane.doe@example.com',
  password: 'password',
}).match(createUserResultMatcher)

// Success: CreateUserSuccess
createUser({
  email: 'jane.doe@example.com',
  password: 'p4ssw0rd',
}).match(createUserResultMatcher)

class GetUserSuccess {
  id: string

  constructor(id: string) {
    this.id = id
  }
}

type GetUserResult = Either<
  Option<GetUserSuccess>,
  DomainError | ApplicationError
>

function getUserById(id: string): GetUserResult {
  try {
    if (id === 'user-id') {
      throw new Error(`The user id ${id} is in an invalid format.`)
    }
    if (id === 'user-id-123') {
      return success(none())
    }
    return success(some(new GetUserSuccess(id)))
  } catch (err) {
    if (err instanceof Error) {
      return failure(new DatabaseError(err.message))
    }
    return failure(new Error('Something went wrong'))
  }
}

const getUserResultMatcher = {
  success: (s: Option<GetUserSuccess>) => {
    s.match({
      some: (v) => console.log(`Is success and some: ${v.id}`),
      none: () => console.log(`Is success and none`),
    })
  },
  failure: failureHandler,
}

// Failure: DatabaseError
getUserById('user-id').match(getUserResultMatcher)

// Success: None
getUserById('user-id-123').match(getUserResultMatcher)

// Success: Some: GetUserSuccess
getUserById('user-id-456').match(getUserResultMatcher)
