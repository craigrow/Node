// HttpFileServer.js
// Learnyounode exercise #11

// Starts an HTTP server.
// Listens on the port provided by the first command line parameter.
// Serves the file specified by the second command line parameter.

var http = require('http')
var fs = require('fs')

var server = http.createServer(function (req, res) {
	strm = fs.createReadStream(process.argv[3])
	strm.pipe(res)
})

server.listen(process.argv[2])