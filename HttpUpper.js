// HttpUpper.js
// Learnyounode exercise #12

// Starts an HTTP server.
// Listens on the port provided by the first command line parameter.
// Converts incoming POST characters to upper-case and returns to client.

var http = require('http')
var fs = require('fs')
var map = require('through2-map')

var server = http.createServer(function (req, res) {
	req.pipe(map(function (chunk) {
		return chunk.toString().toUpperCase()
	})).pipe(res)
})

server.listen(process.argv[2])