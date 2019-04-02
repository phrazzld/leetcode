// 942

const diStringMatch = S => {
  let output = new Array()
  for (let i = 0; i <= S.length; i++) {
    output.push(i)
  }
  for (let i = 0; i < S.length; i++) {
    if (S[i] === 'D') {
      let temp = output.splice(-1)
      output = output.slice(0, i)
        .concat(temp)
        .concat(output.slice(i, output.length))
    }
  }
  return output
}
