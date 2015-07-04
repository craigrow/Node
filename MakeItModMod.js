
// MakeItModMod.js
// For learnyounode exercise #6
//
// Implements the following contract:
//   1. Export a single function that takes exactly the arguments described.
//   2. Call the callback exactly once with an error or some data as described.
//   3. Don't change anything else, like global variables or stdout.
//   4. Handle all the errors that may occur and pass them to the callback.

var fs = require('fs')
var p = require('path')

module.exports = function(dir, ext, callback) {

	fs.readdir(dir, function doneReading(err, files) {
		if (err) {
			return callback(err)
		}
		var list = []
		for (i=0; i<files.length; i++) {
			fileExt = p.extname(files[i])
			if (fileExt == "." + ext) {
				list.push(files[i])
			}
		}
		callback(null, list)
	})
}

