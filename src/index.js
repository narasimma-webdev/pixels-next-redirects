const { parseRedirects } = require('./services/redirects')
const { writeRedirects } = require('./services/writer')

const getRedirects = async (inputFile) => {
  const redirects = await parseRedirects(inputFile)

  return redirects
}

const buildRedirects = async (inputFile, outputFile) => {
  const redirects = await getRedirects(inputFile)
  writeRedirects(redirects, outputFile)
}

module.exports = {
  getRedirects,
  buildRedirects,
}
