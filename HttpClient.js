// Http client
// learnyounode exercise #7

// Takes a URL as the first command line argument.
// Writes a string of content for each data event from the response to a new line.


var http = require('http')

var url = process.argv[2]

http.get(url, function(res) {
  res.setEncoding('utf8')
  res.on('data', console.log)
  res.on('error', console.error)
})