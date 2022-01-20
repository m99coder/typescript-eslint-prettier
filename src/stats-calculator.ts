export class StatsCalculator {
  static minimum(numbers: number[]): number {
    return numbers.reduce((min, cur) => {
      return cur < min ? cur : min
    }, 0)
  }

  static maximum(numbers: number[]): number {
    return numbers.reduce((max, cur) => {
      return cur > max ? cur : max
    }, 0)
  }

  static count(numbers: number[]): number {
    return numbers.length
  }

  static average(numbers: number[]): number {
    return (
      numbers.reduce((sum, cur) => {
        return sum + cur
      }, 0) / StatsCalculator.count(numbers)
    )
  }
}
