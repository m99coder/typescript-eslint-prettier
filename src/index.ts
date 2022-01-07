import { Either, failure, success } from './lib'

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

// Failure: UserAlreadyExists
console.log(
  createUser({
    email: 'john.doe@example.com',
    password: 'easy',
  })
)

// Failure: PasswordDoesntMeetCriteria
console.log(
  createUser({
    email: 'jane.doe@example.com',
    password: 'easy',
  })
)

// Failure: DatabaseError
console.log(
  createUser({
    email: 'jane.doe@example.com',
    password: 'password',
  })
)

// Success: CreateUserSuccess
console.log(
  createUser({
    email: 'jane.doe@example.com',
    password: 'p4ssw0rd',
  })
)
