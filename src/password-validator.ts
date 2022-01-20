export type ValidationResult = {
  valid: boolean
  errors?: string[]
}

export class PasswordValidator {
  static validate(password: string): ValidationResult {
    const between5and15CharsLong = password.length >= 5 && password.length <= 15
    const atLeastOneDigit = new RegExp(/\d/, 'g').test(password)
    const atLeastOneUpperCaseLetter = new RegExp('[A-Z]', 'g').test(password)

    const valid =
      between5and15CharsLong && atLeastOneDigit && atLeastOneUpperCaseLetter
    const errors: string[] = []

    if (!between5and15CharsLong) {
      errors.push('Must be between 5 and 15 characters long')
    }
    if (!atLeastOneDigit) {
      errors.push('Must contain at least one digit')
    }
    if (!atLeastOneUpperCaseLetter) {
      errors.push('Must contain at least one upper case letter')
    }

    if (errors.length > 0) {
      return { valid, errors }
    }
    return { valid }
  }
}
