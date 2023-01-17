module.exports = function check(str, bracketsConfig) {
  const config = bracketsConfig.reduce((acc, pair) => {
    return {
      ...acc,
      [pair[0]]: pair[1]
    }
  }, {})
  const stack = []

  for (let ch of str) {
    if (ch === config[ch]) {
      const similarCh = stack[stack.length - 1]

      if (similarCh === ch) {
        stack.pop()
        continue
      }
    }
    if (config[ch]) {
      stack.push(config[ch])
    } else {
      const chFromStack = stack.pop()

      if (ch !== chFromStack) {
        return false
      }
    }
  }

  return stack.length === 0
  // {
  //  '(': ')',
  //  '[': ']' 
  // }
}
