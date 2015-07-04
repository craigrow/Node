// FirstAsyncIO.js
// For learnyounode exercise #4

// Takes a file as a parameter, reads it and prints the number of new lines it contains.

// Load the required module.
var fs = require('fs');

// Read the file.
var file = process.argv[2];

// Create a var to hold the number of lines.
var lines = 0;


// Read the file into a string.
// Split the string at carriage returns.
// Loop over the array to count the number of lines.
// Remove a line because the test file does not end with a carriage return.
function countLines(callback) {
	fs.readFile(file, function doneReading(err, fileContents) {
		a = fileContents.toString()
		a = a.split('\n');

		for (i=0; i<a.length; i++) {
			lines += 1;
		}

		lines -= 1

		callback()
	})
}

// Print the results.
function logResult() {
	console.log(lines)
}

countLines(logResult)