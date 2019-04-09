// 242

const isAnagram = (s, t) => {
  if (s.length !== t.length) return false
  while (s.length > 0) {
    if (s === t) return true
    if (t.indexOf(s[0]) > -1) {
      t = t.substring(0, t.indexOf(s[0])) + t.substring(t.indexOf(s[0]) + 1)
      s = s.substring(1)
    } else {
      return false
    }
  }
  return true
}
