function getMin (length) {
  let str = ''
  for (let i = 0; i < length; i++) {
    str += '1'
  }
  return Number(str)
}

function getCasesForLength (length) {
  const cases = []
  const max = Math.pow(10, length)
  const min = getMin(length)
  for (let i = min; i < max; i++) {
    const c = []
    const str = i.toString()
    for (let a = 0; a < length; a++) {
      c.push(Number(str.charAt(a)))
    }
    if (!c.includes(0)) {
      cases.push(c)
    }
  }
  return cases
}

module.exports = function createTestCases () {
  let cases = []
  for (let i = 0; i < 5; i++) {
    const length = i + 1
    cases = cases.concat(getCasesForLength(length))
  }
  return cases
}
