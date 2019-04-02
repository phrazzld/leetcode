// 905

const sortArrayByParity = A => {
  let evens = new Array()
  let odds = new Array()
  for (let i = 0; i < A.length; i++) {
    if (A[i] % 2 === 0) evens.push(A[i])
    else odds.push(A[i])
  }
  return evens.concat(odds)
}
