const _ = require('lodash')

const resolve = require('./resolve')
const createTestCases = require('./createTestCases')

const tests = createTestCases()
const solved = []

function sum (arr) {
  return arr.reduce((acc, el) => acc + el, 0)
}

console.log(`Running ${tests.length} tests...`)

tests.forEach(state => {
  const res = resolve(state)
  if (res.solved) {
    solved.push(Object.assign({}, res, { state }))
  }
})

let output = solved
  .map(s => [
    _.padEnd(s.iterations, 15),
    _.padEnd(sum(s.state), 10),
    _.padEnd(`[${s.state.join(', ')}]`, 40),
  ].join(' '))

output = [
  [
    _.padEnd('ITERATIONS', 15),
    _.padEnd('SUM', 10),
  ].join(' '),
].concat(output)

console.log(`${output.join('\n')}`)

console.log(`-------------------------------`)

const diff = _.uniq(solved.map(s => sum(s.state)))

console.log(diff)
