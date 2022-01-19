import { fizzBuzz } from '../src/fizz-buzz'

describe('Fizz Buzz', () => {
  it('should accept 2', () => {
    expect(fizzBuzz(2)).toBeDefined()
  })

  it('should not accept 0', () => {
    expect(() => fizzBuzz(0)).toThrowError(
      'Only the numbers from 1 to 100 are accepted'
    )
  })

  it('should not accept 101', () => {
    expect(() => fizzBuzz(101)).toThrowError(
      'Only the numbers from 1 to 100 are accepted'
    )
  })

  it('should return “Fizz” for 3', () => {
    expect(fizzBuzz(3)).toEqual('Fizz')
  })

  it('should return “Fizz” for 6', () => {
    expect(fizzBuzz(6)).toEqual('Fizz')
  })

  it('should return “Buzz” for 5', () => {
    expect(fizzBuzz(5)).toEqual('Buzz')
  })

  it('should return “Buzz” for 10', () => {
    expect(fizzBuzz(10)).toEqual('Buzz')
  })

  it('should return “FizzBuzz” for 15', () => {
    expect(fizzBuzz(15)).toEqual('FizzBuzz')
  })

  it('should return “FizzBuzz” for 30', () => {
    expect(fizzBuzz(30)).toEqual('FizzBuzz')
  })

  it('should return “11” for 11', () => {
    expect(fizzBuzz(11)).toEqual('11')
  })
})
