import { TextUtils } from '../src/text-utils'

describe('TextUtil', () => {
  it('knows that the length of “hello” is less than 10', () => {
    expect(TextUtils.isLessThanLength('hello', 10)).toBeTruthy()
  })

  it('accepts negative numbers for length parameter', () => {
    expect(TextUtils.isLessThanLength('hello', -5)).toBeFalsy()
  })
})
