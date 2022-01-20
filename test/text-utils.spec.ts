import { TextUtils } from '../src/text-utils'

describe('TextUtil', () => {
  it('knows that the length of “hello” is less than 10', () => {
    expect(TextUtils.isLessThanLength('hello', 10)).toBe(true)
  })

  it('accepts negative numbers for length parameter', () => {
    expect(TextUtils.isLessThanLength('hello', -5)).toBe(false)
  })
})