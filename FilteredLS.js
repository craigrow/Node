// FilteredLS.js
// For learnyounode exercise #5

// Prints the list of files in a dir given a filter based on file extension.

// Add the required libraries
var fs = require('fs')
var p = require('path')

// Read in the command line parameters
var path = process.argv[2]
var ext = process.argv[3]

// Read the contents of the directory and return the results as 'files'
function listDir(callback){
	fs.readdir(path, function doneReading(err, list) {
		
		files = list
		callback()
	})
}

// Log results to the console
function logResult() {

	// Check each file against the ext. Print it if it matches.
	for (i=0; i<files.length; i++) {
		fileExt = p.extname(files[i])
		if (fileExt == "." + ext) {
			console.log(files[i])
		}
	}
}

listDir(logResult)