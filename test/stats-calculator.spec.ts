import { StatsCalculator } from '../src/stats-calculator'

describe('StatsCalculator', () => {
  const numbers = [2, 4, 21, -8, 53, 40]

  describe('minimum', () => {
    it('should return -8 for [2, 4, 21, -8, 53, 40]', () => {
      expect(StatsCalculator.minimum(numbers)).toBe(-8)
    })
  })

  describe('maximum', () => {
    it('should return 53 for [2, 4, 21, -8, 53, 40]', () => {
      expect(StatsCalculator.maximum(numbers)).toBe(53)
    })
  })

  describe('count', () => {
    it('should return 6 for [2, 4, 21, -8, 53, 40]', () => {
      expect(StatsCalculator.count(numbers)).toBe(6)
    })
  })

  describe('average', () => {
    it('should return ~18.67 for [2, 4, 21, -8, 53, 40]', () => {
      expect(StatsCalculator.average(numbers)).toBe(56 / 3)
    })
  })
})
