# Transformation Priority Premise (TPP)

|#|Transformation|Starting code|Ending code|
|---|---|---|---|
|1|`{} -> nil`|`{}`|`[return] nil`|
|2|`nil -> constant`|`[return] nil`|`"0"`|
|3|`constant -> constant+`|`[return] "0"`|`[return] "0" + "1"`|
|4|`constant -> scalar`|`"0" + "1"`|`[return] argument`|
|5|`statement -> statements`|`[return] argument`|`[return] argument.substring(2)`|
|6|`unconditional -> conditional`|`[return] argument`|`if (condition) [return] "0" else [return] "1"`|
|7|`scalar -> array`|`apple`|`[apple, banana]`|
|8|`array -> container`|`[apple, banana]`|`~`|
|9|`statement -> tail recursion`|`x + y`|`x + recursion`|
|10|`if -> loop`|`if (condition)`|`loop (condition)`|
|11|`statement -> recursion`|`x + recursion`|`recursion`|
|12|`expression -> function`|`(y2 - y1) / (x2 - x1)`|`calculateSlope(x1, x2, y1, y2)`|
|13|`variable -> mutation`|`position`|`let position = [1, 1]; position = [1, 2];`|

### Transformation 1: {} -> nil

From not having implemented anything to return something

```javascript
return        // nothing
return null   // null
return ''     // empty string
```

### Transformation 2: nil -> constant

```javascript
return 1      // constant
```

### Transformation 3: constant -> constant

```javascript
// more complex constants
return 1 + 2
return { value: 1 }
```

### Transformation 4: constant -> scalar

```javascript
// functions or method arguments
const demo = (arg) => {
  return arg + 2
}
```

### Transformation 5: statement -> statements

Unconditional statements: maintaining a single code path

```javascript
const demo = (arg) => {
  let temp = arg + 2              // assignment
  return min(max(0, arg, temp)    // subroutine
}
```

### Transformation 6: unconditional -> conditional

```javascript
const demo = (arg) => {
  return condition ? 0 : 1
}
```

### Transformation 7: scalar -> array

```javascript
const demo = (index) => {
  let numbers = [0, 1, 2, 3, 4, 5, 6]
  return numbers[index]
}
```

### Transformation 8: array -> container

```javascript
const demo = (index, elIndex) => {
  let page = new Page()           // a more complex container than an array
  return page.getElement(index, elIndex)
}
```

### Transformation 9: statement -> tail recursion

Tail recursion is different from regular recursion in the sense that with each evaluation of a recursive call, we’re pushing a value along into further recursive iterations. A simplified way of understanding it is that the original recursive call is the last expression evaluated.

```javascript
function tailRecSum(x, total = 0) {
  if (x === 0) {
    return total
  }
  return tailRecSum(x - 1, total + x)
}
```

### Transformation 10: if -> loop

```javascript
const demo = (arg) => {
  for (let i = 0; i < arg; i++) {
    // ...
  }
}
```

### Transformation 11: statement -> recursion

```javascript
function recSum(x) {
  if (x === 0) {
    return 0
  }
  return x + recSum(x - 1)
}
```

### Transformation 12: expression -> function

```javascript
const demo = (name) => {
  return Greeting.getGreeting(name)
}
```

### Transformation 13: variable -> mutation

```javascript
const demo = () => {
  let name = 'John'
  name = 'Jane'
}
```

## Fibonacci example

```typescript
// input:           0
// expected output: 0
// transformation:  {} -> nil (#1)
// implementation doesn’t work

// input:           0
// expected output: 0
// transformation:  nil -> constant (#2)
const fibonacci = (input: number): number => {
  return 0
}

// input:           1
// expected output: 1
// transformation:  constant -> scalar (#4)
const fibonacci = (input: number): number => {
  return input
}

// input:           2
// expected output: 1
// transformation:  unconditional -> conditional (#6)
const fibonacci = (input: number): number => {
  if (input < 2) {
    return input
  }
  return input - 1
}

// input:           3
// expected output: 2
// transformation:  unconditional -> conditional (#6)
const fibonacci = (input: number): number => {
  if (input < 2) {
    return input
  }
  return input - 1
}

// input:           4
// expected output: 3
// transformation:  unconditional -> conditional (#6)
const fibonacci = (input: number): number => {
  if (input < 2) {
    return input
  }
  return input - 1
}

// input:           5
// expected output: 5
// transformation:  scalar -> array (#7)
const fibonacci = (input: number): number => {
  let f = [0, 1, 1, 2, 3, 5]
  return f[input]
}

// input:           6
// expected output: 8
// transformation:  scalar -> array (#7)
const fibonacci = (input: number): number => {
  let f = [0, 1, 1, 2, 3, 5, 8]
  return f[input]
}

// input:           7
// expected output: 13
// transformation:  scalar -> array (#7)
const fibonacci = (input: number): number => {
  let f = [0, 1, 1, 2, 3, 5, 8, 13]
  return f[input]
}

// input:           8
// expected output: 21
// transformation:  statement -> tail recursion (#9)
const fibonacci = (input: number): number => {
  if (input < 2) {
    return input
  }
  return fibonacci(index - 1) + fibonacci(index - 2)
}
```
