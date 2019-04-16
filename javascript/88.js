// 88

const merge = (nums1, m, nums2, n) => {
  if (n !== 0) nums1.splice(n * -1)
  nums1.push(...nums2)
  nums1.sort((a, b) => a - b)
}
