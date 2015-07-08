// My attempt. See good solution in Juggling.js

// Load required libs.
var http = require('http')
var bl = require('bl')

// Setup an array to hold the text.
var output = []
// Setup a variable to count the callbacks.
var count = 0

// Function to print the results...duh.
function printResults() {
	for(i=0; i<3; i++) {
		console.log(output[i])
	}
}

// Function to get the text from the URL.
function httpGet(index) {
	http.get(process.argv[2 + index], function(res) {
		res.pipe(bl(function (err, data) {
			if (err)
				return console.error(err)
			output[index] = data.toString()
			
			// Increment the counter and print results only if we have all three.
			count++
			if (count == 3)
				printResults()
		}))
	})
}

// Call the httpGet function three times, incrementing the index each time.
for (i=0; i<3; i++) {
	httpGet(i)
}