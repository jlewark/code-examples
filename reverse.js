
let string = 'ocmeD evoL I'

let recursiveReverse = function recursiveReverse(string) {
  if (string.length <= 0) {
    return ''
  }
  let lastChar = string[string.length -1]
  let remainder = string.substring(0,string.length - 1)
  //console.log(lastChar)
  //console.log(remainder)
  let output =  lastChar + recursiveReverse(remainder)
  return output
}

console.log(recursiveReverse(string))
