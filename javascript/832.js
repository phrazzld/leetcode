// 832

const flipRow = row => {
  let flippedRow = new Array()
  for (let i = 0; i < row.length; i++) {
    flippedRow.push(row[row.length-i-1])
  }
  return flippedRow
}

const invertRow = row => {
  let invertedRow = new Array()
  for (let i = 0; i < row.length; i++) {
    if (row[i] === 0) invertedRow.push(1)
    else invertedRow.push(0)
  }
  return invertedRow
}

const flipAndInvertImage = A => {
  let flippedAndInverted = new Array()
  for (let i = 0; i < A.length; i++) {
    flippedAndInverted.push(invertRow(flipRow(A[i])))
  }
  return flippedAndInverted
}
