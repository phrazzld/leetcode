// 283

const moveZeroes = nums => {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      let temp = nums.splice(i, 1)
      nums.push(temp)
      i--
    }
  }
}
