const { readLines } = require('./reader')

const parseSource = (sourceLine) => (sourceLine.slice(-1) !== '/' ? sourceLine : sourceLine.slice(0, -1))

const parseDestination = (destinationLine) => {
  if (!destinationLine || destinationLine === '/') {
    return '/'
  }

  return destinationLine.slice(-1) !== '/' ? destinationLine : destinationLine.slice(0, -1)
}

const parseRedirects = async (inputFile) => {
  const redirects = []
  const lines = await readLines(inputFile)

  lines.forEach((line) => {
    const source = parseSource(line[0])
    const destination = parseDestination(line[1])

    if (source !== destination) {
      redirects.push({
        source,
        destination,
        permanent: true,
      })
    }
  })

  return redirects
}

module.exports = {
  parseRedirects,
}
