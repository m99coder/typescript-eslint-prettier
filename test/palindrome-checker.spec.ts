import { PalindromeChecker } from '../src/palindrome-checker'

describe('PalindromeChecker', () => {
  it('should be able to tell that “mom” is a palindrome', () => {
    const palindromeChecker = new PalindromeChecker()
    expect(palindromeChecker.isAPalindrome('mom')).toBe(true)
  })

  it('should be able to tell that “bill” isn’t a palindrome', () => {
    const palindromeChecker = new PalindromeChecker()
    expect(palindromeChecker.isAPalindrome('bill')).toBe(false)
  })
})
