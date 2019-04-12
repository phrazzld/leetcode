// 189

const rotate = (nums, k) => {
  nums.unshift(...nums.splice(nums.length - k))
}
