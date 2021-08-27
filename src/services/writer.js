const fs = require('fs')

const writeRedirects = (redirects, location) => {
  const contents = `
    const redirects = ${JSON.stringify(redirects, null, 4)};
    
    module.exports = redirects`;

  fs.writeFileSync(location, contents)
}

module.exports = {
  writeRedirects,
}
