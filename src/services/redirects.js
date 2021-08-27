const { readLines } = require('./reader')

const parseSource = (sourceLine) => (sourceLine.slice(-1) !== '/' ? sourceLine : sourceLine.slice(0, -1))

const parseDestination = (destinationLine) => {
  if (!destinationLine || destinationLine === '/') {
    return '/'
  }

  return destinationLine.slice(-1) !== '/' ? destinationLine : destinationLine.slice(0, -1)
}

const parseRedirect = (line) => {
  const source = parseSource(line[0])
  const destination = parseDestination(line[1])

  return {
    source,
    destination,
    permanent: true,
  }
}

const parseRedirects = async (inputFile) => {
  const redirects = []
  const lines = await readLines(inputFile)

  lines.forEach((line) => {
    const redirect = parseRedirect(line)

    if (redirect.source !== redirect.destination) {
      redirects.push(redirect)
    }
  })

  return redirects
}

module.exports = {
  parseSource,
  parseDestination,
  parseRedirect,
  parseRedirects,
}
