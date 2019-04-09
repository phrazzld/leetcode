// 169

const majorityElement = nums => {
  let threshold = nums.length / 2
  let counter = {}
  for (let i = 0; i < nums.length; i++) {
    if (counter[nums[i]] == null) counter[nums[i]] = 1
    else counter[nums[i]] += 1
    if (counter[nums[i]] > threshold) return nums[i]
  }
  return false
}
