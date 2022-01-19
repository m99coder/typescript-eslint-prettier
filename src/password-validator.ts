export class PasswordValidator {
  private password: string | undefined

  setPassword(password: string) {
    this.password = password
  }

  validatePassword(password: string) {
    return this.password === password
  }
}
