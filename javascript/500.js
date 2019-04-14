// 500

const findWords = words => {
  let rowOne = 'qwertyuiop'
  let rowTwo = 'asdfghjkl'
  let rowThree = 'zxcvbnm'
  let answer = new Array()

  words.forEach(word => {
    let row
    let push = true
    if (rowOne.indexOf(word[0].toLowerCase()) > -1) row = rowOne
    else if (rowTwo.indexOf(word[0].toLowerCase()) > -1) row = rowTwo
    else row = rowThree
    for (let i = 0; i < word.length; i++) {
      if (row.indexOf(word[i].toLowerCase()) === -1) push = false
    }
    if (push) answer.push(word)
  })

  return answer
}
