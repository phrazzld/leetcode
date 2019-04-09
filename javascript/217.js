// 217

const containsDuplicate = nums => {
  let counter = {}
  for (let i = 0; i < nums.length; i++) {
    if (counter[nums[i]] == null) counter[nums[i]] = 1
    else return true
  }
  return false
}
