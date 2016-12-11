const MAX_ITERATIONS = 1000

function iterate (state) {
  const copy = [...state]
  let ant = 0
  copy.forEach((e, i) => {
    ++ant
    copy[i] = copy[i] - 1
  })
  copy.push(ant)
  return copy.filter(e => e > 0)
}

function isSolved (state) {
  let cur = state[0]
  if (cur !== 1) { return false }
  for (let i = 1; i < state.length; i++) {
    let step = state[i]
    if (step - cur !== 1) { return false }
    cur = step
  }
  return state.length > 1
}

function resolve (state) {
  let i = 1
  let solved = false
  let loopMap = {}
  if (isSolved(state)) {
    return { solved: true, iterations: 0 }
  }
  while (true) {
    if (i > MAX_ITERATIONS) { break }
    state = iterate(state)
    if (isSolved(state)) {
      solved = true
      break
    }
    // check if we already passed this state
    const hash = state.join('|')
    if (loopMap[hash]) { break }
    loopMap[hash] = true
    i++
  }
  return {
    solved,
    iterations: i,
  }
}

module.exports = resolve
