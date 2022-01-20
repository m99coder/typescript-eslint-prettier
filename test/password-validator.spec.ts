import { PasswordValidator } from '../src/password-validator'

describe('PasswordValidator', () => {
  it('should report “V4lid” as valid', () => {
    expect(PasswordValidator.validate('V4lid')).toEqual({ valid: true })
  })

  it('should report “V4li” as invalid', () => {
    expect(PasswordValidator.validate('V4li')).toEqual({
      valid: false,
      errors: ['Must be between 5 and 15 characters long'],
    })
  })

  it('should report “Valid” as invalid', () => {
    expect(PasswordValidator.validate('Valid')).toEqual({
      valid: false,
      errors: ['Must contain at least one digit'],
    })
  })

  it('should report “v4lid” as invalid', () => {
    expect(PasswordValidator.validate('v4lid')).toEqual({
      valid: false,
      errors: ['Must contain at least one upper case letter'],
    })
  })
})
