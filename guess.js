const request = require('request-promise')
const baseURL = 'http://fesdev-benino.boopsie.net:8080'


function makeGuess(value) {
  let opts = {
    url: baseURL + '/guess',
    method: 'POST',
    format: 'json',
    body: 'keywords={"try": ' + value + '}'
  }
  return request(opts)
}

function getInit() {
  let opts = {
    url: baseURL + '/init',
    method: 'GET',
    format: 'json'
  }
  return request(opts)
}

async function makeSmartGuess(min, max) {
  let guess =  Math.floor((max - min)/2) + min
  console.log("Guess:" + guess + " Min: " + min + " Max: " + max)
  let result = JSON.parse(await makeGuess(guess))
  console.log(result)
  if (result.result === 'GUESS_IS_LOW') {
    makeSmartGuess(guess, max)
  } else if (result.result === 'GUESS_IS_HIGH') {
    makeSmartGuess(min, guess)
  } else {
    console.log("Success")
    console.log(result)
  }
}


async function makeGuesses() {
  let init = JSON.parse(await getInit())
  let min = parseInt(init.struct[2].min)
  let max = parseInt(init.struct[2].max)
  console.log("Min: " + min)
  console.log("Max: " + max)
  makeSmartGuess(min, max)


}

makeGuesses()
