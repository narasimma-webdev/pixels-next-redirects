const { parseRedirect, parseSource, parseDestination } = require('../../src/services/redirects')

describe('Redirect parse', () => {
  test('Parses sources', async () => {
    const result1 = parseSource('/test')
    const result2 = parseSource('/test/')

    expect(result1).toEqual('/test')
    expect(result2).toEqual('/test')
  })

  test('Parses destinations', async () => {
    const result1 = parseDestination('')
    const result2 = parseDestination('/')
    const result3 = parseDestination('/test/')

    expect(result1).toEqual('/')
    expect(result2).toEqual('/')
    expect(result3).toEqual('/test')
  })

  test('Parses redirects', async () => {
    const result = parseRedirect(['/test/', '/new/test/'])

    expect(result).toEqual({
      source: '/test',
      destination: '/new/test',
      permanent: true,
    })
  })
})
