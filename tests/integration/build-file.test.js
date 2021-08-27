const fs = require('fs')
const { buildRedirects } = require('../../src/index')

const inputFile = `${__dirname}/fixtures/test-redirects.csv`
const outputFile = `${__dirname}/fixtures/TEST-OUTPUT.js`

describe('Build JS output file from CSV', () => {
  afterEach(() => fs.unlinkSync(outputFile));

  test('Creates a JSON file from CSV', async () => {
    await buildRedirects(inputFile, outputFile)

    const result = fs.existsSync(outputFile)

    expect(result).toBeTruthy()
  })
})
