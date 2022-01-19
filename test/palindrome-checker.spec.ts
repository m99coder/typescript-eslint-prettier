import { PalindromeChecker } from '../src/palindrome-checker'

describe('PalindromeChecker', () => {
  let palindromeChecker: PalindromeChecker

  beforeEach(() => {
    palindromeChecker = new PalindromeChecker()
  })

  it('should be able to tell that “mom” is a palindrome', () => {
    expect(palindromeChecker.isAPalindrome('mom')).toBe(true)
  })

  it('should be able to tell that “bill” isn’t a palindrome', () => {
    expect(palindromeChecker.isAPalindrome('bill')).toBe(false)
  })

  it('should still detect a palindrome even if the casing is off', () => {
    expect(palindromeChecker.isAPalindrome('Mom')).toBe(true)
  })

  it('should be able to tell that “Was It A Rat I Saw” is a palindrome', () => {
    expect(palindromeChecker.isAPalindrome('Was It A Rat I Saw')).toBe(true)
  })

  it('should be able to tell that “Never Odd or Even” is a palindrome', () => {
    expect(palindromeChecker.isAPalindrome('Never Odd or Even')).toBe(true)
  })
})
