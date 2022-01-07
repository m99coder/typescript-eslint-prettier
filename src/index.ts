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

function isApplicationError(
  e: ApplicationError | DomainError
): e is ApplicationError {
  return 'error' in e
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
let createUserResult = createUser({
  email: 'john.doe@example.com',
  password: 'easy',
})
// console.log(createUserResult)
// console.log(createUserResult.isFailure())
createUserResult.match(createUserResultMatcher)

// Failure: PasswordDoesntMeetCriteria
createUserResult = createUser({
  email: 'jane.doe@example.com',
  password: 'easy',
})
// console.log(createUserResult)
// console.log(createUserResult.isFailure())
createUserResult.match(createUserResultMatcher)

// Failure: DatabaseError
createUserResult = createUser({
  email: 'jane.doe@example.com',
  password: 'password',
})
// console.log(createUserResult)
// console.log(createUserResult.isFailure())
createUserResult.match(createUserResultMatcher)

// Success: CreateUserSuccess
createUserResult = createUser({
  email: 'jane.doe@example.com',
  password: 'p4ssw0rd',
})
// console.log(createUserResult)
// console.log(createUserResult.isSuccess())
createUserResult.match(createUserResultMatcher)

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
let getUserResult = getUserById('user-id')
// console.log(getUserResult)
// console.log(getUserResult.isFailure())
getUserResult.match(getUserResultMatcher)

// Success: None
getUserResult = getUserById('user-id-123')
// console.log(getUserById('user-id-123'))
// console.log(getUserResult.isSuccess())
// console.log(getUserResult.unwrap().isNone())
getUserResult.match(getUserResultMatcher)

// Success: Some: GetUserSuccess
getUserResult = getUserById('user-id-456')
// console.log(getUserResult)
// console.log(getUserResult.isSuccess())
// console.log(getUserResult.unwrap().isSome())
getUserResult.match(getUserResultMatcher)
