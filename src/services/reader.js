const readline = require('readline')
const fs = require('fs')

async function readLines(file) {
  const result = []

  const fileStream = fs.createReadStream(file)

  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity,
  });

  // eslint-disable-next-line no-restricted-syntax
  for await (const line of rl) {
    result.push(line)
  }

  return result
}

module.exports = {
  readLines,
}
