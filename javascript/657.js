// 657

const judgeCircle = moves => {
  let coords = [0, 0]
  for (let i = 0; i < moves.split('').length; i++) {
    switch (moves[i]) {
      case 'U':
        coords[1] += 1
        break
      case 'D':
        coords[1] -= 1
        break
      case 'R':
        coords[0] += 1
        break
      case 'L':
        coords[0] -= 1
        break
      default:
        throw new Error(`Unusual move: ${moves[i]}`)
    }
  }
  if (coords[0] === 0 && coords[1] === 0) return true
  else return false
}

// Test case
let moves = 'UD'
console.log(`${judgeCircle(moves)} (expected true)`)
