// Juggling.js
// Takes three URLs as command line parameters.
// Prints the data returned from each as a string, 
// in the order in which the URLs were provided.

var http = require('http')
var bl = require('bl')
var results = []
var count = 0

function printResults() {
	for (i=0; i<3; i++)
		console.log(results[i])
}

function httpGet(index) {
	http.get(process.argv[2 + index], function(res) {
		res.setEncoding('utf8')
		res.pipe(bl(function(err, data) {
			if (err)
				return console.error(err)

			results[index] = data.toString()
			count++

			if (count == 3)
				printResults()
		}))
	})
}

for (i=0; i<3; i++)
	httpGet(i)