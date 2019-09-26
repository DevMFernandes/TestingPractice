const caesar = (string, num) => {
  let crypt = ""
  let alphabet = ["a",	"b",	"c",	"d",	"e",	"f",	"g",	"h",	"i",	"j",	"k",	"l",	"m",	"n",	"o",	"p",	"q",	"r",	"s",	"t",	"u",	"v",	"w",	"x",	"y",	"z"]
  for (let index = 0; index < string.length; index++) {
    let letter = string[index];
    let isUpperCase = letter === letter.toUpperCase()
    let alphabetPos = alphabet.indexOf(letter.toLowerCase())
    if (alphabetPos === -1){
      crypt += letter
    }
    else{
      let newPos = alphabetPos+num
      newPos > 25 ? newPos = newPos - 26 : newPos
      let nextLetter = alphabet[newPos]
      isUpperCase === true ? crypt += nextLetter.toUpperCase() : crypt += nextLetter
    }

  }
  return crypt
}

module.exports = caesar