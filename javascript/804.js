// 804. Unique Morse Code Words

const morseMap = {
  "a": ".-",
  "b": "-...",
  "c": "-.-.",
  "d": "-..",
  "e": ".",
  "f": "..-.",
  "g": "--.",
  "h": "....",
  "i": "..",
  "j": ".---",
  "k": "-.-",
  "l": ".-..",
  "m": "--",
  "n": "-.",
  "o": "---",
  "p": ".--.",
  "q": "--.-",
  "r": ".-.",
  "s": "...",
  "t": "-",
  "u": "..-",
  "v": "...-",
  "w": ".--",
  "x": "-..-",
  "y": "-.--",
  "z": "--.."
}

const uniqueMorseRepresentations = words => {
  let uniques = new Set()
  for (let i = 0; i < words.length; i++) {
    let morseWord = ''
    for (let j = 0; j < words[i].length; j++) {
      morseWord += morseMap[words[i][j]]
    }
    if (!uniques.has(morseWord)) uniques.add(morseWord)
  }
  return uniques.size
}

// Test case
console.log(`
  ${uniqueMorseRepresentations(["gin", "zen", "gig", "msg"])} (expecting 2)
`)
