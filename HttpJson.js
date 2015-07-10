// HttpJson.js
// Learnyounode exercise #13

// Starts an HTTP server.
// Returns the time in one of two formats depending on the URL.

// Load required libs.
var http = require('http')
var date = require('date')
var url = require('url')

// Start the Http server
var server = http.createServer(function (req, res) 
{
	var url_parts = url.parse(req.url, true)
	var time = new Date(url_parts.query.iso)

	var time = new Date(url_parts.query.iso)
	var hour = time.getHours()
	var minute = time.getMinutes()
	var second = time.getSeconds()

	// Two IF statements to handle the two possible URLs.
	if (url_parts.pathname == "/api/parsetime")
	{
		result = { 'hour' : hour, 'minute' : minute, 'second' : second }
	}

	if (url_parts.pathname == "/api/unixtime")
	{
		result = time.getTime()
		result = { "unixtime" : result }
	}
	
	res.writeHead(200, { 'Content-Type' : 'application/json '})
	res.end(JSON.stringify(result))

}).listen(process.argv[2])
