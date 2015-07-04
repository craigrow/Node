// MakeItModProgram.js
// For learnyounode exercise #6
//
// Takes a directory and a file extension.
// Returns a list of file in the dir which have the extension.

var mod = require('./MakeItModMod.js')
var p = require('path')

var dir = process.argv[2]
var ext = process.argv[3]

mod(dir, ext, function(err, files) {
		if (err) {
		console.log('error')
	}
	for (i=0; i<files.length; i++) {
		console.log(files[i])
	}
})	


