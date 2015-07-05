// HttpCollect
// learnyounode exercise #8

// Takes a URL as the first command line argument.
// Collects the data across multiple events counts.
// Prints the total number of chars and the string.

// Load required modules.
var http = require('http')
var bl = require('bl')

// Get the URL from the command line.
var url = process.argv[2]

var b = http.get(url, function(res) {
	res.setEncoding('utf8');
	res.pipe(bl(function (err, data) {
		var raw = data.toString();
		console.log(raw.length)
		console.log(raw)
	}));
	res.on('error', console.error);
});

b.end();