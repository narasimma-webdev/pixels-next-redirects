const { getRedirects } = require('../../src/index')

const inputFile = `${__dirname}/fixtures/test-redirects.csv`

const expected = [
  {
    source: '/old-source',
    destination: '/new-source',
    permanent: true,
  },
  {
    source: '/old-about',
    destination: '/new-about',
    permanent: true,
  },
]

describe('Build JS redirects objects from CSV', () => {
  test('Default settings: matches expected json output', async () => {
    const result = await getRedirects(inputFile)

    expect(result).toMatchObject(expected)
  })
})
