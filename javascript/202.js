// 202

const isHappy = n => {
  let tried = new Set()
  let x = n
  for (;;) {
    if (tried.has(x)) return false
    let str = x.toString()
    let sum = 0
    for (let i = 0; i < str.length; i++) {
      sum += parseInt(str[i]) ** 2
    }
    if (sum === 1) return true
    tried.add(x)
    x = sum
  }
}
