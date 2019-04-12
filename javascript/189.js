// 189

const rotate = (nums, k) => {
  for (let i = 0; i < k; i++) {
    nums.unshift(nums.pop())
  }
}
