export const nthFibonacci = (input: number): number => {
  if (input < 0) {
    throw new Error('Only positive numbers are accepted')
  }

  // smart solution using recursion
  return input === 0 || input === 1
    ? input
    : nthFibonacci(input - 1) + nthFibonacci(input - 2)

  // more complicated solution using a reducer
  // const numbers = [...Array(input + 1).keys()]
  // const result = numbers.reduce(
  //   (acc, cur) => {
  //     if (cur === 1) {
  //       return [0, 1]
  //     }
  //     return [acc[1], acc[0] + acc[1]]
  //   },
  //   [0, 0]
  // )
  // return result[1]
}
