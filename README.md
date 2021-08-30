# Pixels Next.js Redirects

Build Next.js redirects from a CSV file.

## Background

Next.js handles redirects as part of next.config.js. We often receive list of redirects from the client as a CSV/Excel, with pattern of old url -> new url. While very human readable, next.js would like to have these redirects in this format:

```javascript
    [
      {
        source: '/old-page',
        destination: '/new-page',
        permanent: true,
      },
      {
        source: '/some-old-page',
        destination: '/some-new-page',
        permanent: true,
      },
    ]
```

Creating redirects manually for few links is not a problem, but becomes unfeasible when there are hundreds of redirects. That's where this library comes in. It automatically generates a list of redirects based on comma separated csv.

## Usage

You can either install this library as part of your next.js project, or use it as a run-once script for creating redirects. Whatever you do, the outcome should be an automatically generated .js module that contains all the redirects from the CSV. Then you can just import those redirects to your next.config.js file.

Creating the redirects file:
```javascript
const { buildRedirects } = require('path/to/lib/src')

const csvRedirects = `${__dirname}/my-redirects.csv`
const outputFile = `${__dirname}/my-redirects.js`

const createRedirectsFromMyCSV = async (input, output) => {
    await buildRedirects(inputFile, outputFile)
}

createRedirectsFromMyCSV(csvRedirects, outputfile)

```

Importing the created file to next.js config:

```javascript
// next.config.js

// Redirects created in the previous step
const redirects = require('/path/to/your/redirects/file')

module.exports = {
 // ... Other next.js configs,
 async redirects() {
    return redirects
  },
}
```