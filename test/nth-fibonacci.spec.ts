import { nthFibonacci } from '../src/nth-fibonacci'

describe('N-th Fibonacci', () => {
  it('should not accept -1', () => {
    expect(() => nthFibonacci(-1)).toThrowError(
      'Only positive numbers are accepted'
    )
  })

  it('should for input 0 return 0', () => {
    expect(nthFibonacci(0)).toBe(0)
  })

  it('should for input 1 return 1', () => {
    expect(nthFibonacci(1)).toBe(1)
  })

  it('should for input 2 return 1', () => {
    expect(nthFibonacci(1)).toBe(1)
  })

  it('should for input 3 return 2', () => {
    expect(nthFibonacci(3)).toBe(2)
  })

  it('should for input 4 return 3', () => {
    expect(nthFibonacci(3)).toBe(2)
  })

  it('should for input 5 return 5', () => {
    expect(nthFibonacci(3)).toBe(2)
  })

  it('should for input 6 return 8', () => {
    expect(nthFibonacci(3)).toBe(2)
  })

  it('should for input 7 return 13', () => {
    expect(nthFibonacci(3)).toBe(2)
  })

  it('should for input 8 return 21', () => {
    expect(nthFibonacci(3)).toBe(2)
  })

  it('should for input 9 return 34', () => {
    expect(nthFibonacci(3)).toBe(2)
  })
})
