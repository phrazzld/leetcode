// 985

const sumEven = A => {
  let sum = 0
  for (let i = 0; i < A.length; i++) {
    if (A[i] % 2 === 0) sum += A[i]
  }
  return sum
}

const sumEvenAfterQueries = (A, queries) => {
  let answer = new Array()

  for (let i = 0; i < queries.length; i++) {
    let queryIndex = queries[i][1]
    let queryVal = queries[i][0]
    let answerVal = A[queryIndex] + queryVal
    A[queryIndex] = answerVal
    answer.push(sumEven(A))
  }

  return answer
}
