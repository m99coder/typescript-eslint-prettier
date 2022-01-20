export class PalindromeChecker {
  public isAPalindrome(input: string) {
    // the simplest possible thing that would work
    // if (input === 'mom') {
    //   return true
    // } else {
    //   return false
    // }
    const reversed = input.split('').reverse().join('')
    return (
      reversed.replace(/\s+/g, '').toLowerCase() ===
      input.replace(/\s+/g, '').toLowerCase()
    )
  }
}