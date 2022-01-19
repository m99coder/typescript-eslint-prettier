export const fizzBuzz = (input: number): string | Error => {
  if (input < 1 || input > 100) {
    throw new Error('Only the numbers from 1 to 100 are accepted')
  }
  if (input % 3 === 0 && input % 5 === 0) {
    return 'FizzBuzz'
  }
  if (input % 3 === 0) {
    return 'Fizz'
  }
  if (input % 5 === 0) {
    return 'Buzz'
  }
  return input.toString()
}
