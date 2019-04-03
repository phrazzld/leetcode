// 728

const selfDividingNumbers = (left, right) => {
  let nums = new Array()
  for (let i = left; i <= right; i++) {
    let digits = i.toString().split('')
    let selfDividing = true
    for (let j = 0; j < digits.length; j++) {
      if (i % digits[j] !== 0) {
        selfDividing = false
        break
      }
    }
    if (selfDividing) nums.push(i)
  }
  return nums
}
