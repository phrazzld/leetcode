// 125

const isPalindrome = s => {
  s = s.toLowerCase().replace(/\W/g, '')
  for (let i = 0; i < s.length / 2; i++) {
    if (s[i] !== s[s.length-i-1]) return false
  }
  return true
}
